import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Market Place',
  description: 'Saas Market place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className='relative flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
