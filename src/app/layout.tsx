import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Srandha',
    description: 'Sarandha ecommerce website(Development)',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col`}>
                <Navbar />
                {children}
                <footer>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
