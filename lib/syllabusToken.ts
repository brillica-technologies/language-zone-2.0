// Short-lived signed links for the syllabus PDF. Issued by POST /api/syllabus after the
// CRM verifies the enquiry; redeemed by GET /api/syllabus?token=… from the thank-you page.
// Server only: needs SYLLABUS_TOKEN_SECRET in the environment.

import { createHmac, timingSafeEqual } from "node:crypto";

const TTL_MS = 30 * 60 * 1000; // 30 minutes

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function secret() {
  const s = process.env.SYLLABUS_TOKEN_SECRET;
  if (!s) throw new Error("SYLLABUS_TOKEN_SECRET is not set");
  return s;
}

export function issueSyllabusToken(now = Date.now()) {
  const exp = String(now + TTL_MS);
  return `${exp}.${sign(exp, secret())}`;
}

export function verifySyllabusToken(token: string | null, now = Date.now()) {
  if (!token) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < now) return false;
  const expected = Buffer.from(sign(exp, secret()));
  const given = Buffer.from(sig);
  return expected.length === given.length && timingSafeEqual(expected, given);
}
