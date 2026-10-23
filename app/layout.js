import { Manrope } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Script from "next/script";
import StickyMobileCta from "@/components/StickyMobileCta";
import AnalyticsScripts, { GtmNoscript } from "@/components/AnalyticsScripts";
import { FOUNDER_IMAGE_ALT, ogImages } from "@/data/geoEntity";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-manrope",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  metadataBase: new URL('https://www.primeidea.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: {
    default: "PrimeIdea Ventures",
    template: "%s | PrimeIdea Ventures"
  },
  description: "Research-led wealth management and portfolio review from Vadodara for investors across Gujarat and India.",
  keywords: [
    "portfolio review Vadodara",
    "research-led wealth management Vadodara",
    "SEBI research analyst Vadodara",
    "mutual fund research Vadodara",
    "financial planning",
    "mutual funds",
    "insurance planning",
    "wealth management",
    "retirement planning",
    "SEBI Registered Research Analyst INH000017815"
  ],
  authors: [{ name: "Partha Shah" }],
  creator: "PrimeIdea Ventures",
  publisher: "PrimeIdea Ventures",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
  assets: ['https://www.primeidea.in'],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.primeidea.in",
    siteName: "PrimeIdea Ventures",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    site: "@primeidea",
    creator: "@primeidea",
    images: ogImages,
  },
  other: {
    "og:image:alt": FOUNDER_IMAGE_ALT,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${manrope.className}`}
      suppressHydrationWarning
    >
      {/* <Script
          defer="defer"
          type="text/javascript"
          src="https://primeidea-ventures.odoo.com/im_livechat/loader/1"
        />
        <Script
          defer="defer"
          type="text/javascript"
          src="https://primeidea-ventures.odoo.com/im_livechat/assets_embed.js"
        /> */}
      <body suppressHydrationWarning>
        <GtmNoscript />
        <AnalyticsScripts />
        <main>{children}</main>
        <StickyMobileCta />
         <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              Tawk_API.customStyle = {
                visibility: {
                  mobile: {
                    position: 'br',
                    xOffset: 5,
                    yOffset: 120
                  }
                }
              };
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/59db992c4854b82732ff4818/default';
                s1.charset='UTF-8';
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
