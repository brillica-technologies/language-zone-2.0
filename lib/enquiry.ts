// Enquiry API: the same WhatsApp-OTP flow the Brillica Services website uses
// (CRM backend: /api/auth/send-otp → /api/auth/resend-otp → /api/enquiry/lp).

import { COUNTRIES } from "@/lib/countries";
import {
  getCountryCallingCode,
  isValidPhoneNumber,
  type CountryCode,
} from "libphonenumber-js/min";

// set in .env (NEXT_PUBLIC_ so it is available in the browser): the CRM backend base URL
const API_BASE = process.env.NEXT_PUBLIC_ENQUIRY_URL;

export const NAME_PATTERN = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const OTP_LENGTH = 4;
// the backend allows 3 OTP sends per hour; this only paces the resend button
export const RESEND_SECONDS = 30;

export type Country = { code: CountryCode; dial: string; name: string };

/** All countries with their calling codes, India first, then alphabetical. */
export const getCountryList = (): Country[] =>
  COUNTRIES.map(([code, dial, name]) => ({
    code: code as CountryCode,
    dial,
    name,
  }));

export const flag = (code: string) =>
  String.fromCodePoint(...[...code].map((c) => 0x1f1a5 + c.charCodeAt(0)));

export function isValidPhone(national: string, country: CountryCode) {
  return national.length > 0 && isValidPhoneNumber(national, country);
}

/** Digits only, calling code first (e.g. 919876543210), the format the CRM stores. */
export function toContactNo(national: string, country: CountryCode) {
  return getCountryCallingCode(country) + national.replace(/^0+/, "");
}

function findSource() {
  const utm = new URLSearchParams(window.location.search).get("utm_source");
  const ref = document.referrer || "";
  for (const s of [
    "instagram",
    "facebook",
    "linkedin",
    "chatgpt",
    "perplexity",
    "gemini",
    "youtube",
  ]) {
    if (ref.includes(s) || utm?.includes(s)) return s;
  }
  return utm || "organic";
}

type ApiResult = { ok: boolean; message: string };

async function post(path: string, body: object): Promise<ApiResult> {
  if (!API_BASE) {
    console.error("NEXT_PUBLIC_ENQUIRY_URL is not set in .env");
    return { ok: false, message: "Something went wrong. Please call us." };
  }
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => null);
    return { ok: res.ok, message: data?.message ?? "" };
  } catch (err) {
    console.error("Enquiry API error:", err);
    return {
      ok: false,
      message:
        "Could not reach the server. Check your connection and try again.",
    };
  }
}

// Leads are tagged with the site domain in pageRoute, since send-otp has no "website" field.
const pageRoute = () => `languagezone.in${window.location.pathname}`;

export function sendOtp(name: string, contactNo: string, message: string) {
  return post("/api/auth/send-otp", {
    name,
    contactNo,
    pageRoute: pageRoute(),
    source: findSource(),
    referrer: document.referrer || "No referrer",
    location: "Dehradun",
    message: message || undefined,
  });
}

export function resendOtp(contactNo: string) {
  return post("/api/auth/resend-otp", { contactNo });
}

export function submitEnquiry(data: {
  name: string;
  email: string;
  contactNo: string;
  message: string;
  otp: string;
}) {
  return post("/api/enquiry/lp", data);
}
