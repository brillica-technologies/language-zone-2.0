import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Readex_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

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
  authors: [{ name: "LanguageZone" }],
  robots: { index: true, follow: true },
  icons: { icon: "/images/small_logo.png" },
  other: {
    locale: "dehradun_IN",
    "geo.region": ",In-dehradun",
    "geo.placename": ",Dehradun",
    "geo.position": "30.29403265533804, 77.99704247140885",
    ICBM: "30.29403265533804, 77.99704247140885",
    classification: "education and training",
    distribution: "local",
    WebCrawlers: "All",
    MSNBots: "All, FOLLOW",
    "Googlebot-Image": "All",
    BINGBots: "All, FOLLOW",
    YAHOOBots: "All, FOLLOW",
    GoogleBots: "All, FOLLOW",
    copyright: "LanguageZone",
    "facebook-domain-verification": "d567zwhhdf2fxazfre00cozodaq801",
  },
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
    <html lang="en" className={`${readex.variable} ${fraunces.variable}`}>
      <body>
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

        <Script id="fb-pixel" strategy="afterInteractive">
          {FB_PIXEL}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {GTM}
        </Script>
        {/* AiSensy Chat widget */}
        <Script
          id="aisensy-wa-widget"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          strategy="afterInteractive"
          {...{ "widget-id": "aaa3x3" }}
        />
      </body>
    </html>
  );
}
