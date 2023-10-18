import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yassine',
  description: 'Yassine ben azouz personal portfolio',
  openGraph: { type: "profile", title: "Yassine", images: ["https://raw.githubusercontent.com/benAzouzYassin/portfolio-2.0/main/preview.PNG"] }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
