import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "ASCI",
  description:
    "Full-service creative agency crafting websites, brands, and experiences that convert.",
  openGraph: {
    type: "website",
    title: "ASCI",
    description:
      "Full-service creative agency crafting websites, brands, and experiences that convert.",
    images: [
      "https://framerusercontent.com/images/yAZX8RK1NvLxNDABKLzXp5akfI.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCI",
    description:
      "Full-service creative agency crafting websites, brands, and experiences that convert.",
    images: [
      "https://framerusercontent.com/images/yAZX8RK1NvLxNDABKLzXp5akfI.jpg",
    ],
  },
  icons: {
    icon: "https://framerusercontent.com/images/Pyu0gfJ3BB9ZKJFsT0jIDpec.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
