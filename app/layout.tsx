import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zarembka Software Eng',
  description:
    'Zero Templates. Zero Drag-and-Drop. Data-driven web infrastructure engineered from absolute scratch.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://futureprosoccer.com" />
        <link rel="prefetch" href="https://futureprosoccer.com" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-base text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
