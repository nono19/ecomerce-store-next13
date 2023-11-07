import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store FE',
  description: 'Store FE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
