import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import localFont from 'next/font/local'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { GoogleAnalytics } from '@next/third-parties/google'

const fontGmarketSans = localFont({
    src: [
        {
            path: '../../public/fonts/GmarketSansLight.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GmarketSansMedium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GmarketSansBold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-gmarket-sans',
})

export const metadata: Metadata = {
    title: '유튜브 채널 성장 시스템, 멘토스',
    description: '유튜브 채널 성장은 멘토스',
    openGraph: {
        title: '유튜브 채널 성장 시스템, 멘토스',
        description: '유튜브 채널 성장은 멘토스',
        url: 'https://www.mentous.xyz/',
        images: 'https://mentous.xyz/images/logo.png',
        type: 'website',
    },
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${fontGmarketSans.variable} antialiased`}>
                <SessionProvider>
                    <div
                        className={'w-full flex flex-col relative min-h-screen'}
                    >
                        <Nav />
                        {children}
                        <Footer />
                    </div>
                </SessionProvider>
            </body>

            <GoogleAnalytics gaId={process.env.GA_ID as string} />
        </html>
    )
}
