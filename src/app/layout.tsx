import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import MobileNav from '@/components/layout/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-Gen Learning Dashboard',
  description: 'A modern, highly animated student learning dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background text-text-main antialiased selection:bg-primary/30`}
      >
        <div className="flex h-[100dvh] overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-0 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
            {children}
          </div>
          <MobileNav />
        </div>
      </body>
    </html>
  )
}
