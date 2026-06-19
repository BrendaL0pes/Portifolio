import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Brenda Medeiros Lopes | Software Engineer',
  description: 'Building intelligent backend systems and developer tools using modern software engineering practices',
  generator: 'b',
  icons: {
    icon: [
      { url: '/icon.svg?v=2', type: 'image/svg+xml' }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
