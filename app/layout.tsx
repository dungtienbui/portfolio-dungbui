// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { inter } from './fonts/fonts'
import { SpotlightEffect } from './components/SpotlightEffect'
import { Navbar } from './components/nav/Navbar'
import Footer from './components/footer/footer'


export const metadata: Metadata = {
  title: 'Tien Dung Bui - Web Developer Portfolio',
  description: 'Portfolio của Bùi Tiến Dũng, một Web Developer chuyên về React và Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <SpotlightEffect />
        <Providers>
          <Navbar />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}