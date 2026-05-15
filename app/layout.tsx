import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'Ludovico Comito',
  description: 'Ludovico Comito\'s personal website',
  generator: 'Ludovico Comito',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          data-goatcounter="https://ludocomito.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
