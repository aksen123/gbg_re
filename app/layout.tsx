import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/main/Header'
import Footer from './Components/main/Footer'
const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='lg:text-[62.5%] text-[55%]'>
      <body className='text-mainText text-main-text overflow-x-hidden'>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
