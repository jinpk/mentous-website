import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import localFont from 'next/font/local'

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
    title: '멘토스 | 유튜버 성장 커뮤니티',
    description: '유튜브 채널 성장 비밀, 멘토스 커뮤니티',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${fontGmarketSans.variable} antialiased`}>
                <div className={'w-full flex flex-col relative min-h-screen'}>
                    <Nav />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
