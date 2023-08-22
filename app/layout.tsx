import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReactGA from "react-ga4"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const TRACKING_ID = "";
ReactGA.initialize(TRACKING_ID)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
