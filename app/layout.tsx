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
  description:
    "Stanford student studying Data Science and Computer Science (AI). Passionate about music and machine learning research.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
