import React from "react"
import type { Metadata } from "next"
import { Source_Serif_4, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Yanav Lall",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${inter.variable} font-serif antialiased`}>
        <Navigation />
        {children}

        {/* Global footer (shows on every page) */}
        <footer className="border-t border-border">
          <div className="max-w-2xl mx-auto px-6 py-6">
            <p className="text-xs text-muted-foreground">
              Copyright © 2026 Yanav Lall
            </p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
