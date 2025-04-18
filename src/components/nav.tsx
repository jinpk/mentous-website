'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { CtaJoinButton } from '@/app/auth/components/cta-join-button'

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const [show, setShow] = useState(true)
    const lastScrollYRef = useRef<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

            if (window.scrollY > lastScrollYRef.current) {
                setShow(false)
            } else {
                setShow(true)
            }

            lastScrollYRef.current = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={clsx(
                'w-full max-w-[var(--max-width)] mx-auto py-6 px-8 sticky top-0 z-[100]',
                'transition-transform delay-100',
                show ? 'translate-y-0' : '-translate-y-full'
            )}
        >
            <nav
                className={clsx(
                    'h-[var(--nav-height)] px-8 pr-4 rounded grid grid-cols-3 items-center transition-all',
                    scrolled
                        ? 'bg-white/64 backdrop-blur-[56px] opacity-100'
                        : 'bg-white/100 opacity-100'
                )}
            >
                <Link href={'/'} className={'w-[188px] h-[30px] relative'}>
                    <Image src={'/images/logo.svg'} alt={'Logo'} fill />
                </Link>

                <div className={'grid auto-cols-auto justify-center'}>
                    <Link href={'/youtube'}>
                        <div
                            className={
                                'space-x-2 items-center transition-all hover:text-red flex group'
                            }
                        >
                            <Image
                                src={'/images/yt-play.png'}
                                alt={'YT Play'}
                                width={32}
                                height={32}
                                className={'group-hover:hidden'}
                            />
                            <Image
                                src={'/images/yt-play-on.png'}
                                alt={'YT Play'}
                                width={32}
                                height={32}
                                className={'hidden group-hover:block'}
                            />

                            <span>유튜브</span>
                        </div>
                    </Link>
                </div>

                <div className={'flex justify-end'}>
                    <CtaJoinButton />
                </div>
            </nav>
        </header>
    )
}
