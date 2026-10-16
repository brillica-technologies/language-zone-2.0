"use client";

import { useState, type FormEvent } from "react";
import { sendEnquiry } from "@/lib/legacy";

export default function CallbackForm({ query }: { query: string }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("Sending...");
    const res = await sendEnquiry(
      String(data.get("name") ?? "").trim(),
      String(data.get("phone") ?? "").replace(/\D/g, ""),
      query,
    );
    setSending(false);
    setStatus(res.message);
    if (res.ok) form.reset();
  }

  return (
    <form className="lz-quick" onSubmit={onSubmit} noValidate>
      <label className="lz-sr" htmlFor="q-name">
        Your name
      </label>
      <input
        id="q-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        maxLength={40}
        required
      />
      <label className="lz-sr" htmlFor="q-phone">
        Mobile number
      </label>
      <input
        id="q-phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="Mobile number"
        maxLength={10}
        required
      />
      <button className="lz-btn lz-btn-gold" type="submit" disabled={sending}>
        Request a call back
      </button>
      <p className="lz-form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
