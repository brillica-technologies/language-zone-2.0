import type { Metadata, Viewport } from "next";
import { Fraunces, Readex_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import JsonLd from "@/components/JsonLd";
import { GEO, LOCALE, SITE_NAME, SITE_URL, siteJsonLd } from "@/lib/seo";

const readex = Readex_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-readex",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "German Language Course in Dehradun | A1 to C2 | Language Zone",
    template: "%s | Language Zone",
  },
  description:
    "Language Zone is a German language institute in Dehradun. Goethe-Zertifikat preparation from A1 to C2 with certified trainers, online and offline batches.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/small_logo.png",
    apple: "/images/small_logo.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: LOCALE,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  other: {
    // local SEO: Dehradun, Uttarakhand (ISO 3166-2: IN-UT)
    "geo.region": "IN-UT",
    "geo.placename": "Dehradun",
    "geo.position": `${GEO.lat};${GEO.lng}`,
    ICBM: `${GEO.lat}, ${GEO.lng}`,
    "facebook-domain-verification": "d567zwhhdf2fxazfre00cozodaq801",
  },
};

export const viewport: Viewport = {
  themeColor: "#14143a",
};

const FB_PIXEL = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1067598120776862');
fbq('track', 'PageView');`;

const GTM = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P5K43J4L');`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${readex.variable} ${fraunces.variable}`}>
      {/* Next adds the metadata tags (title, description, Open Graph, …) to this head.
          GTM and the Meta Pixel sit as high in <head> as their vendors recommend. */}
      <head>
        {/* Google Tag Manager */}
        <script id="gtm" dangerouslySetInnerHTML={{ __html: GTM }} />
        {/* Meta Pixel */}
        <script id="fb-pixel" dangerouslySetInnerHTML={{ __html: FB_PIXEL }} />
        {/* AiSensy WhatsApp chat widget */}
        <script
          id="aisensy-wa-widget"
          async
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          {...{ "widget-id": "aab6n7" }}
        />
        {/* Site-wide structured data: LocalBusiness + WebSite */}
        <JsonLd data={siteJsonLd()} />
      </head>
      <body>
        {/* GTM noscript fallback: Google asks for it right after <body> opens.
            The pixel's <img> fallback must also live in <body> (img isn't valid in head). */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5K43J4L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          <img
            height="1"
            width="1"
            alt=""
            src="https://www.facebook.com/tr?id=1067598120776862&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <Popup />
      </body>
    </html>
  );
}
