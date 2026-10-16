"use client";

import { useEffect, useId, useMemo, useState, type FormEvent } from "react";
import type { CountryCode } from "libphonenumber-js/min";
import {
  EMAIL_PATTERN,
  NAME_PATTERN,
  OTP_LENGTH,
  RESEND_SECONDS,
  flag,
  getCountryList,
  isValidPhone,
  resendOtp,
  sendOtp,
  submitEnquiry,
  toContactNo,
} from "@/lib/enquiry";
import { GERMAN_LEVELS, PHONE_PRIMARY, levelLabel } from "@/lib/site";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const COURSE_OPTIONS = [
  ...GERMAN_LEVELS.map(levelLabel),
  "Not sure, help me choose",
];

type Field = "name" | "phone" | "otp" | "email" | "course";
type Errors = Partial<Record<Field, string>>;

declare global {
  interface Window {
    dataLayer?: object[];
  }
}

export type EnquiryFormProps = {
  title?: string;
  subtitle?: string;
  /** "select" shows a course picker; a string fixes the course and hides the picker */
  course?: "select" | string;
  defaultCourse?: string;
  showEmail?: boolean;
  showMode?: boolean;
  showMessage?: boolean;
  /** added to the lead message, e.g. "Download curriculum request" */
  context?: string;
  submitLabel?: string;
  className?: string;
  onSuccess?: () => void;
};

export default function EnquiryForm({
  title,
  subtitle,
  course = "select",
  defaultCourse = "",
  showEmail = false,
  showMode = false,
  showMessage = false,
  context,
  submitLabel = "Submit",
  className = "",
  onSuccess,
}: EnquiryFormProps) {
  const id = useId();
  const countries = useMemo(() => getCountryList(), []);

  const [name, setName] = useState("");
  const [country, setCountry] = useState<CountryCode>("IN");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [picked, setPicked] = useState(defaultCourse);
  const [mode, setMode] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  // the number an OTP was sent to; editing the phone afterwards needs a fresh OTP
  const [otpFor, setOtpFor] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [sending, setSending] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const dial = countries.find((c) => c.code === country)?.dial ?? "91";
  const contactNo = toContactNo(phone, country);
  const otpSent = otpFor !== "" && otpFor === contactNo;

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(cooldown - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const check = {
    name: () =>
      !name.trim()
        ? "Please enter your name."
        : !NAME_PATTERN.test(name.trim())
          ? "Use letters only (2–50 characters)."
          : "",
    phone: () =>
      !phone
        ? "Please enter your WhatsApp number."
        : !isValidPhone(phone, country)
          ? `Enter a valid mobile number for +${dial}.`
          : "",
    otp: () =>
      !otpSent
        ? "Verify your number: tap Send OTP first."
        : otp.length !== OTP_LENGTH
          ? `Enter the ${OTP_LENGTH}-digit OTP sent to your WhatsApp.`
          : "",
    email: () =>
      email && !EMAIL_PATTERN.test(email.trim())
        ? "Please enter a valid email address."
        : "",
    course: () =>
      course === "select" && !picked ? "Please choose a course." : "",
  };

  const validate = (fields: Field[]) => {
    const next: Errors = { ...errors };
    let ok = true;
    for (const f of fields) {
      const msg = check[f]();
      next[f] = msg || undefined;
      if (msg) ok = false;
    }
    setErrors(next);
    return ok;
  };

  // re-check a field as the visitor fixes it, once it has shown an error
  const touch = (f: Field) => errors[f] && validate([f]);

  async function onSendOtp() {
    setNotice(null);
    if (!validate(["name", "phone"])) return;
    setSending(true);
    const leadMessage = buildMessage();
    const res = otpSent
      ? await resendOtp(contactNo)
      : await sendOtp(name.trim(), contactNo, leadMessage);
    setSending(false);
    if (!res.ok) {
      setNotice({ ok: false, text: res.message || "Could not send the OTP." });
      return;
    }
    setOtpFor(contactNo);
    setOtp("");
    setCooldown(RESEND_SECONDS);
    setErrors((e) => ({ ...e, otp: undefined }));
    setNotice({
      ok: true,
      text: `OTP sent to +${dial} ${phone} on WhatsApp. It is valid for 2 minutes.`,
    });
  }

  function buildMessage() {
    const chosen = course === "select" ? picked : course;
    return [
      "Language Zone",
      context,
      chosen && `Course: ${chosen}`,
      mode && `Mode: ${mode}`,
      message.trim(),
    ]
      .filter(Boolean)
      .join(" | ");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setNotice(null);
    const fields: Field[] = ["name", "phone", "otp"];
    if (showEmail) fields.push("email");
    if (course === "select") fields.push("course");
    if (!validate(fields)) return;

    setSubmitting(true);
    const res = await submitEnquiry({
      name: name.trim(),
      email: email.trim(),
      contactNo,
      message: buildMessage(),
      otp,
    });
    setSubmitting(false);
    if (!res.ok) {
      const text = res.message || "Something went wrong. Please try again.";
      if (/otp/i.test(text)) setErrors((er) => ({ ...er, otp: text }));
      else setNotice({ ok: false, text });
      return;
    }
    window.dataLayer?.push({ event: "lz_enquiry_submitted" });
    setDone(true);
    onSuccess?.();
  }

  function reset() {
    setName("");
    setPhone("");
    setOtp("");
    setEmail("");
    setPicked(defaultCourse);
    setMode("");
    setMessage("");
    setOtpFor("");
    setErrors({});
    setNotice(null);
    setDone(false);
  }

  if (done) {
    return (
      <div
        role="status"
        className={cn(
          "flex flex-col items-center gap-2.5 py-5 text-center",
          className,
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gold text-ink">
          <CheckIcon className="size-7" strokeWidth={3} aria-hidden="true" />
        </span>
        <h3 className="font-disp text-[26px] text-navy">
          Thank you, {name.trim().split(" ")[0]}!
        </h3>
        <p className="max-w-95 text-mute">
          Your enquiry is in. A trainer will call you on +{dial} {phone}{" "}
          shortly. For anything urgent, call{" "}
          <a
            className="text-indigo underline"
            href={`tel:${PHONE_PRIMARY.tel}`}
          >
            {PHONE_PRIMARY.label}
          </a>
          .
        </p>
        <Button
          variant="link"
          className="text-base text-indigo"
          onClick={reset}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  const aria = (f: Field) => ({
    "aria-invalid": !!errors[f],
    "aria-describedby": errors[f] ? `${id}-${f}-err` : undefined,
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("flex w-full flex-col gap-3.5 text-left", className)}
    >
      {(title || subtitle) && (
        <div>
          {title && (
            <h3 className="font-disp text-2xl leading-tight text-navy">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1.5 text-[15px] text-mute">{subtitle}</p>
          )}
        </div>
      )}

      <FormField id={`${id}-name`} label="Full name" error={errors.name}>
        <Input
          id={`${id}-name`}
          className={FIELD}
          type="text"
          autoComplete="name"
          maxLength={50}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => name && validate(["name"])}
          {...aria("name")}
        />
      </FormField>

      <FormField
        id={`${id}-phone`}
        label="WhatsApp number"
        error={errors.phone}
        hint={
          <>
            The OTP is sent on{" "}
            <b className="font-semibold text-whatsapp">WhatsApp</b>, so use an
            active WhatsApp number.
          </>
        }
      >
        {/* [flag +code ▾][number][Send OTP] share one bordered control */}
        <div
          className={cn(
            "flex h-[50px] items-stretch rounded-xl border border-input bg-white transition-shadow focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/15",
            errors.phone && "border-destructive",
          )}
        >
          <div className="relative flex shrink-0 items-center gap-1 rounded-l-xl border-r border-line pr-2.5 pl-3.5 text-[15px] font-medium text-navy focus-within:bg-tint">
            <span aria-hidden="true">
              {flag(country)} +{dial}
            </span>
            <ChevronDownIcon className="size-4" aria-hidden="true" />
            {/* the real control is an invisible native select over the label */}
            <select
              aria-label="Country code"
              className="absolute inset-0 cursor-pointer opacity-0"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value as CountryCode);
                touch("phone");
              }}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {flag(c.code)} {c.name} (+{c.dial})
                </option>
              ))}
            </select>
          </div>
          <Input
            id={`${id}-phone`}
            className="h-auto min-w-0 flex-1 rounded-none border-0 bg-transparent pl-2.5 text-base shadow-none focus-visible:ring-0 md:text-base"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={15}
            placeholder="Mobile number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value.replace(/\D/g, ""));
              if (errors.phone)
                setErrors((er) => ({ ...er, phone: undefined }));
            }}
            onBlur={() => phone && validate(["phone"])}
            {...aria("phone")}
          />
          <Button
            type="button"
            variant="whatsapp"
            className="m-[5px] h-auto rounded-[9px] px-3 text-[13px] disabled:bg-[#9fb8ab] disabled:opacity-100 md:px-3.5 md:text-sm"
            onClick={onSendOtp}
            disabled={sending || (otpSent && cooldown > 0)}
          >
            {sending
              ? "Sending…"
              : !otpSent
                ? "Send OTP"
                : cooldown > 0
                  ? `Resend in ${cooldown}s`
                  : "Resend OTP"}
          </Button>
        </div>
      </FormField>

      <FormField id={`${id}-otp`} label="OTP" error={errors.otp}>
        <Input
          id={`${id}-otp`}
          className={cn(
            FIELD,
            "font-semibold tracking-[0.4em] placeholder:font-normal placeholder:tracking-[0.1em] disabled:bg-paper disabled:opacity-100",
          )}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={OTP_LENGTH}
          placeholder={otpSent ? "• • • •" : "Send OTP first"}
          disabled={!otpSent}
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value.replace(/\D/g, ""));
            if (errors.otp) setErrors((er) => ({ ...er, otp: undefined }));
          }}
          {...aria("otp")}
        />
      </FormField>

      {showEmail && (
        <FormField
          id={`${id}-email`}
          label="Email"
          optional
          error={errors.email}
        >
          <Input
            id={`${id}-email`}
            className={FIELD}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validate(["email"])}
            {...aria("email")}
          />
        </FormField>
      )}

      {course === "select" && (
        <FormField
          id={`${id}-course`}
          label="Course you are interested in"
          error={errors.course}
        >
          <NativeSelect
            id={`${id}-course`}
            className={SELECT}
            value={picked}
            onChange={(e) => {
              setPicked(e.target.value);
              if (errors.course)
                setErrors((er) => ({ ...er, course: undefined }));
            }}
            {...aria("course")}
          >
            <NativeSelectOption value="" disabled>
              Choose a course
            </NativeSelectOption>
            {COURSE_OPTIONS.map((c) => (
              <NativeSelectOption key={c} value={c}>
                {c}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </FormField>
      )}

      {showMode && (
        <FormField id={`${id}-mode`} label="Preferred mode">
          <NativeSelect
            id={`${id}-mode`}
            className={SELECT}
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <NativeSelectOption value="">Online or offline</NativeSelectOption>
            <NativeSelectOption value="Offline, Race Course centre">
              Offline, at the Race Course centre
            </NativeSelectOption>
            <NativeSelectOption value="Online">Online</NativeSelectOption>
          </NativeSelect>
        </FormField>
      )}

      {showMessage && (
        <FormField id={`${id}-msg`} label="Message" optional>
          <Textarea
            id={`${id}-msg`}
            className="min-h-24 rounded-xl px-3.5 py-3 text-base md:text-base"
            rows={3}
            maxLength={500}
            placeholder="Tell us your goal, e.g. B1 for a work visa by June"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormField>
      )}

      {notice && (
        <p
          role={notice.ok ? "status" : "alert"}
          className={cn(
            "rounded-lg px-3.5 py-2.5 text-sm",
            notice.ok
              ? "bg-[#e7f5ee] text-[#145c39]"
              : "bg-[#fdeaea] text-[#9e1a1a]",
          )}
        >
          {notice.text}
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        size="pill"
        className="mt-1 w-full"
        disabled={submitting}
      >
        {submitting ? "Submitting…" : submitLabel}
      </Button>
      <p className="text-center text-xs text-mute">
        By submitting, you agree to our{" "}
        <a
          className="text-indigo underline"
          href="/static/terms-and-conditions"
        >
          Terms
        </a>{" "}
        and{" "}
        <a className="text-indigo underline" href="/static/privacy-policy">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

const FIELD = "h-[50px] rounded-xl px-3.5 text-base md:text-base";
const SELECT =
  "w-full [&_select]:h-[50px] [&_select]:rounded-xl [&_select]:pl-3.5 [&_select]:text-base [&_svg]:right-4";

/** Label, control, then either the error or the hint below it. */
function FormField({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {optional && <span className="font-normal text-mute">(optional)</span>}
      </Label>
      {children}
      {error ? (
        <p
          id={`${id}-err`}
          className="text-[13px] font-medium text-destructive"
        >
          {error}
        </p>
      ) : (
        hint && <p className="text-[13px] text-mute">{hint}</p>
      )}
    </div>
  );
}
