import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const ambit = localFont({ src: '../public/fonts/Ambit-Regular.otf' })

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
        className={`${geistSans.variable} ${geistMono.variable} ${ambit} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  )
}
