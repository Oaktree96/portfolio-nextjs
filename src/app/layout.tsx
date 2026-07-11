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
  title: "Steven James Colin Osborne — Python Developer & Automation Expert",
  description:
    "Python-focused software engineer building automation tools, data pipelines, and custom web applications. Available for freelance.",
  keywords: [
    "Python developer",
    "automation",
    "web development",
    "FastAPI",
    "freelance",
    "UK developer",
  ],
  openGraph: {
    title: "Steven James Colin Osborne — Python Developer",
    description:
      "Python-focused software engineer building automation tools, data pipelines, and custom web applications.",
    url: "https://oaktreeservices.net",
    siteName: "Steven Osborne Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven James Colin Osborne — Python Developer",
    description:
      "Python-focused software engineer building automation tools, data pipelines, and custom web applications.",
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