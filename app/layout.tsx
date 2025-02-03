import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BotBuzz - Landing Page',
  description: 'Landing page for AI Chat App - BotBuzz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0e0d0d] bg-auto bg-[center_-50px] bg-no-repeat absolute top-0 left-0 w-full`}
        style={{ backgroundImage: 'url(/images/lines.png)' }}
      >
        {children}
      </body>
    </html>
  )
}
