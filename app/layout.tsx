import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import type { Metadata } from "next"
// import { Lateef } from 'next/font/google'
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], weight: "800" })

export const metadata: Metadata = {
  title: "Celebrity Kombat",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
