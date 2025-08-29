import type React from "react"
import type { Metadata } from "next"
import { Barlow, Baskervville } from "next/font/google"
import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
})

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskervville",
})

export const metadata: Metadata = {
  title: "Einat Ehrlich - Data Analyst Portfolio",
  description: "Data Analyst specializing in operations, project management, and business intelligence",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} ${baskervville.variable}`}>{children}</body>
    </html>
  )
}
