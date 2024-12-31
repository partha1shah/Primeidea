import { Manrope } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Bubble } from "@typebot.io/nextjs";


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
  metadataBase: new URL('https://primeidea.in'),
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
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-ms-validation-code',
  },
  assets: ['https://primeidea.in'],
  manifest: '/manifest.json'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${manrope.variable}`}>
      <body
        className={manrope.className}
      >
       <Bubble
          typebot="product-recommendation-y84k1d6"
          previewMessage={{ message: "I have a question for you!" }}
          theme={{ button: { backgroundColor: "#0042DA",  size: "medium" } }}
        />
        {children}
      </body>
    </html>
  );
}
