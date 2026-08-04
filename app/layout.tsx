import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FAF9F6',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://zarembkasoftware.com'),
  title: {
    default: 'Zarembka Software Engineering — Websites built with intention',
    template: '%s — Zarembka Software Engineering',
  },
  description:
    'A small, independent studio designing and engineering custom websites and web applications. No templates, no handoffs — direct collaboration from first call to launch.',
  openGraph: {
    title: 'Zarembka Software Engineering',
    description:
      'Custom websites and applications designed around your business — not a template.',
    url: 'https://zarembkasoftware.com',
    siteName: 'Zarembka Software Engineering',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans bg-soft-white text-ink antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
