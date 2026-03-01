import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Fragment_Mono, Inconsolata } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
  display: "swap",
})

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "ASCI",
    template: "%s | ASCI",
  },
  description:
    "Full-service creative agency crafting websites, brands, and experiences that convert.",
  openGraph: {
    type: "website",
    title: "ASCI",
    description: "Full-service creative agency crafting websites, brands, and experiences that convert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCI",
    description: "Full-service creative agency crafting websites, brands, and experiences that convert.",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fragmentMono.variable} ${inconsolata.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
