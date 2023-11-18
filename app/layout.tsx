import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/ui/Navbar'


export const metadata: Metadata = {
  title: 'Shawty Link',
  description: 'Get Short Links',
}

export default function RootLayout({children,
}: {
  children: React.ReactNode
}) {
  return (
    <Navbar/>
  )
}
