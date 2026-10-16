import { MailIcon, PhoneIcon } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Band,
  CardGrid,
  Lead,
  PageHero,
  PageTitle,
  SectionHead,
} from "@/components/course/Section";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MAP_EMBED } from "@/lib/location";
import {
  ADDRESS,
  EMAIL,
  MAP_LINK,
  PAY_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  WHATSAPP_URL,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Verify your number",
    text: "We send a one-time code on WhatsApp so your enquiry reaches us safely.",
  },
  {
    title: "A trainer calls you",
    text: "Usually within a few working hours, to understand your goal and level.",
  },
  {
    title: "Pick your batch",
    text: "Choose online or offline, morning or evening, and start learning.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.6 2.3A7.9 7.9 0 0 0 8 0C3.6 0 .1 3.6.1 7.9c0 1.4.4 2.8 1 4L0 16l4.2-1.1a7.9 7.9 0 0 0 3.8 1C12.4 15.9 16 12.3 16 7.9c0-2.1-.8-4.1-2.4-5.6zM8 14.5a6.6 6.6 0 0 1-3.4-.9l-.2-.1-2.5.6.7-2.4-.2-.3a6.6 6.6 0 0 1-1-3.5C1.4 4.3 4.4 1.3 8 1.3a6.6 6.6 0 0 1 6.6 6.6c0 3.7-3 6.6-6.6 6.6zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.4.1l-.6.8c-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.6-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.3.2-.3v-.4l-.6-1.5c-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.4.1-.5.2-.2.2-.7.7-.7 1.7s.7 1.9.8 2c.1.1 1.4 2.1 3.4 3 .5.2.8.3 1.1.4.5.2.9.1 1.2.1.4-.1 1.2-.5 1.3-.9.2-.5.2-.9.1-.9l-.4-.3z" />
    </svg>
  );
}

const QUICK = [
  {
    href: `tel:${PHONE_PRIMARY.tel}`,
    small: "Call us",
    label: PHONE_PRIMARY.label,
    icon: <PhoneIcon className="size-4.5" />,
    tone: "bg-ink text-gold",
  },
  {
    href: WHATSAPP_URL,
    small: "WhatsApp",
    label: "Chat with us",
    icon: <WhatsAppIcon className="size-4.5" />,
    tone: "bg-whatsapp text-white",
    external: true,
  },
  {
    href: `mailto:${EMAIL}`,
    small: "Email",
    label: EMAIL,
    icon: <MailIcon className="size-4.5" />,
    tone: "bg-ink text-gold",
  },
];

const DETAILS = [
  {
    label: "Phone",
    href: `tel:${PHONE_PRIMARY.tel}`,
    value: PHONE_PRIMARY.label,
  },
  {
    label: "Phone",
    href: `tel:${PHONE_SECONDARY.tel}`,
    value: PHONE_SECONDARY.label,
  },
  { label: "Email", href: `mailto:${EMAIL}`, value: EMAIL },
  { label: "WhatsApp", href: WHATSAPP_URL, value: "Chat with us" },
];

export default function ContactContent() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
      >
        <PageTitle>Contact Language Zone</PageTitle>
        <Lead>
          Tell us your goal and we will suggest a level and a batch. We usually
          reply by phone within a few working hours.
        </Lead>
        <ul className="mt-7 flex flex-wrap gap-3">
          {QUICK.map((q) => (
            <li key={q.small} className="max-md:w-full">
              <a
                href={q.href}
                {...(q.external ? { target: "_blank", rel: "noopener" } : {})}
                className="flex items-center gap-3 rounded-full border border-line bg-white py-2.5 pr-4.5 pl-2.5 font-medium text-navy transition-shadow hover:shadow-[0_8px_22px_rgba(20,20,58,0.10)]"
              >
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full",
                    q.tone,
                  )}
                >
                  {q.icon}
                </span>
                <span>
                  <small className="block text-xs leading-tight font-normal text-mute">
                    {q.small}
                  </small>
                  {q.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <Band className="flex flex-wrap items-start gap-3.5 md:gap-6">
        <Card className="min-w-0 flex-[1.3_1_480px] rounded-[20px] p-5 shadow-[0_14px_36px_rgba(20,20,58,0.08)] ring-line md:p-7">
          <EnquiryForm
            title="Send an enquiry"
            subtitle="All fields except email and message are required."
            showEmail
            showMode
            showMessage
            context="Contact page"
            submitLabel="Send enquiry"
          />
        </Card>

        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3.5 md:gap-6">
          <Card className="gap-0 rounded-[20px] p-5 text-base ring-line md:p-7">
            <h2 className="mb-3 font-disp text-[26px]">Visit or call</h2>
            <address className="text-mute not-italic">{ADDRESS}</address>
            <dl className="mt-4">
              {DETAILS.map((d) => (
                <div key={d.href}>
                  <Separator className="bg-line" />
                  <div className="flex justify-between gap-4 py-3 max-md:flex-col max-md:gap-0.5">
                    <dt className="text-mute">{d.label}</dt>
                    <dd className="font-semibold break-words md:text-right">
                      <a href={d.href}>{d.value}</a>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-6.5 flex flex-wrap gap-3">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener"
                className={cn(
                  buttonVariants({ variant: "ink", size: "pill" }),
                  "max-md:w-full",
                )}
              >
                Get directions
              </a>
              <a
                href={PAY_URL}
                target="_blank"
                rel="noopener"
                className={cn(
                  buttonVariants({ variant: "outline-ink", size: "pill" }),
                  "max-md:w-full",
                )}
              >
                Pay online
              </a>
            </div>
          </Card>
          <iframe
            className="block h-55 w-full rounded-[20px] border-0 bg-tint md:h-70"
            title="Language Zone on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Band>

      <Band tone="paper">
        <SectionHead
          eyebrow="What happens next"
          title="From enquiry to your first class"
        />
        <CardGrid as="ol" min="260px">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <Card className="h-full gap-0 rounded-[20px] p-5 text-base ring-line md:p-7">
                <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-gold font-semibold text-ink">
                  {i + 1}
                </span>
                <h3 className="text-[19px] font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-mute">{s.text}</p>
              </Card>
            </li>
          ))}
        </CardGrid>
      </Band>
    </main>
  );
}
