import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Osborne Ops — Software Engineering & Development Operations",
  description:
    "Steven Osborne delivers custom software and DevOps — web apps, automation, CI/CD, cloud infrastructure, and full-stack systems for your business. No fluff, just working code.",
  keywords: [
    "DevOps",
    "software engineer",
    "Python developer",
    "automation",
    "CI/CD",
    "cloud infrastructure",
    "FastAPI",
    "freelance",
    "UK developer",
    "web development",
    "full-stack",
    "Osborne Ops",
  ],
  openGraph: {
    title: "Osborne Ops — Software Engineering & Development Operations",
    description:
      "Custom software and DevOps from Steven Osborne. Web apps, automation, CI/CD, cloud infrastructure — built to work, built to last.",
    url: "https://osborneoperations.uk",
    siteName: "Osborne Ops",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osborne Ops — Software Engineering & Development Operations",
    description:
      "Custom software and DevOps from Steven Osborne. Web apps, automation, CI/CD, cloud infrastructure — built to work, built to last.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  )
}