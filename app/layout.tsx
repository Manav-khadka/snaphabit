import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { GSAPProvider } from "@/components/gsap-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SnapHabit - Photo-Based Habit Tracker on Solana",
  description: "Track your habits with photos and earn rewards on the Solana blockchain. Build consistency and achieve your goals with blockchain-backed habit tracking.",
  keywords: ["habit tracker", "Solana", "blockchain", "photo habits", "rewards", "consistency", "goal tracking"],
  authors: [{ name: "SnapHabit Team" }],
  creator: "SnapHabit",
  publisher: "SnapHabit",
  generator: "Next.js",
  applicationName: "SnapHabit",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://snaphabit.xyz"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SnapHabit - Photo-Based Habit Tracker on Solana",
    description: "Track your habits with photos and earn rewards on the Solana blockchain",
    url: "https://snaphabit.xyz",
    siteName: "SnapHabit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: " /images/logo-snaphabit.png",
        width: 1200,
        height: 630,
        alt: "SnapHabit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapHabit - Photo-Based Habit Tracker on Solana",
    description: "Track your habits with photos and earn rewards on the Solana blockchain",
    creator: "@habitsnap",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GSAPProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </GSAPProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
