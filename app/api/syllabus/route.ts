import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BROCHURE_DOWNLOAD_NAME } from "@/lib/brochure";
import { issueSyllabusToken, verifySyllabusToken } from "@/lib/syllabusToken";

// Syllabus download, in two steps so the visitor can be sent to /thank-you:
//   POST  forwards the enquiry to the CRM (which verifies the WhatsApp OTP) and, on
//         success, returns a 30-minute signed token
//   GET   ?token=…  returns the PDF if the token is valid
// The PDF lives in assets/brochure/ and never has a public URL.

const API_BASE = process.env.NEXT_PUBLIC_ENQUIRY_URL;

type Body = {
  name?: unknown;
  email?: unknown;
  contactNo?: unknown;
  message?: unknown;
  otp?: unknown;
};

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const json = (status: number, message: string) =>
  Response.json({ message }, { status });

// literal path segments so Next only bundles this one file with the route
const readBrochure = () =>
  readFile(
    join(process.cwd(), "assets", "brochure", "german-course-syllabus.pdf"),
  );

export async function POST(request: Request) {
  if (!API_BASE) {
    console.error("NEXT_PUBLIC_ENQUIRY_URL is not set in .env");
    return json(500, "Something went wrong. Please call us.");
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return json(400, "Invalid request.");
  }

  const enquiry = {
    name: str(body.name, 50),
    email: str(body.email, 100),
    contactNo: str(body.contactNo, 20),
    message: str(body.message, 1000),
    otp: str(body.otp, 6),
  };
  if (
    !enquiry.name ||
    !/^\d{8,15}$/.test(enquiry.contactNo) ||
    !/^\d{4}$/.test(enquiry.otp)
  ) {
    return json(400, "Please complete the form and verify your number.");
  }

  // the CRM checks the OTP and records the lead
  let crm: Response;
  try {
    crm = await fetch(`${API_BASE}/api/enquiry/lp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
      cache: "no-store",
    });
  } catch (err) {
    console.error("Syllabus enquiry: CRM unreachable", err);
    return json(502, "Could not reach the server. Please try again.");
  }
  if (!crm.ok) {
    const data = await crm.json().catch(() => null);
    return json(crm.status, data?.message || "Something went wrong.");
  }

  // verified: hand out a download token (the lead is saved either way)
  try {
    return Response.json({ token: issueSyllabusToken() });
  } catch (err) {
    console.error("Syllabus token not issued:", err);
    return Response.json({ token: null });
  }
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  let valid = false;
  try {
    valid = verifySyllabusToken(token);
  } catch (err) {
    console.error("Syllabus token check failed:", err);
  }
  if (!valid) return json(403, "This download link has expired.");

  try {
    const file = await readBrochure();
    return new Response(new Uint8Array(file), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${BROCHURE_DOWNLOAD_NAME}"`,
        "Content-Length": String(file.length),
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch {
    console.error(
      "Syllabus PDF missing at assets/brochure/german-course-syllabus.pdf",
    );
    return json(404, "The syllabus is not available right now.");
  }
}
