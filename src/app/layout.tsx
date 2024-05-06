"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SplashScreen from '@/components/SplashScreen'
import { useState } from 'react'
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  const isHome = pathname === "/home";
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <html lang="en">

      <body className={inter.className}>
        {isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {children}
          </>
        )}

      </body>
    </html>
  )
}
