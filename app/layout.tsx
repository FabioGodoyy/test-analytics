import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactGA from "react-ga4";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const TRACKING_ID = "G-RLZM9C37KW";
const ola = "oi";
ReactGA.initialize(TRACKING_ID);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(ola)
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RLZM9C37KW"
        />
        <Script id="ga-config">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
