import type React from "react"
import { Providers } from "@/app/providers"
import "./globals.css"

export const metadata = {
  title: "Lectio",
  description: "AI-powered Bible study companion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
