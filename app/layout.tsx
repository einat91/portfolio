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
    icon: "/favicon.ico",
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
