import { Manrope } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Script from "next/script";
import StickyMobileCta from "@/components/StickyMobileCta";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
  description: "Expert financial planning and investment advisory services. Specializing in mutual funds, insurance, and wealth management solutions.",
  keywords: [
    "financial planning",
    "investment advisory",
    "mutual funds",
    "insurance",
    "wealth management",
    "retirement planning",
    "Gujarat financial services",
    "Indian investment advisor"
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
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  // },
  // other: {
  //   'google-site-verification': 'your-verification-code',
  //   'msvalidate.01': 'your-ms-validation-code',
  // },
  assets: ['https://www.primeidea.in'],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`} suppressHydrationWarning>
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
      <body className={manrope.className} suppressHydrationWarning>
        {children}
        <StickyMobileCta />
         <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              Tawk_API.customStyle = {
                visibility: {
                  mobile: {
                    position: 'br',
                    xOffset: 5,
                    yOffset: 80
                  }
                }
              };
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/59db992c4854b82732ff4818/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
