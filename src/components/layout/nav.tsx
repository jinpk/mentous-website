'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { CtaJoinButton } from '@/components/landing/cta-join-button'
import { signOut, useSession } from 'next-auth/react'

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const [show, setShow] = useState(true)
    const lastScrollYRef = useRef<number>(0)

    const session = useSession()

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
                    <Link href={'/landing/youtube'}>
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
                    {session.data && (
                        <button onClick={() => signOut()} className={'group'}>
                            <div
                                className={
                                    'flex items-center space-x-2  text-neutral-30 group-hover:text-neutral-10'
                                }
                            >
                                <div className={'w-8 h-8 relative'}>
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M27.3137 4.68629C33.5621 10.9347 33.5621 21.0653 27.3137 27.3137C21.0653 33.5621 10.9346 33.5621 4.68629 27.3137C-1.5621 21.0653 -1.5621 10.9346 4.68629 4.68629C10.9347 -1.5621 21.0653 -1.5621 27.3137 4.68629Z"
                                            className={clsx(
                                                'fill-neutral-30 group-hover:fill-neutral-10'
                                            )}
                                        />
                                        <path
                                            d="M19.5361 9.46472C21.489 11.4177 21.489 14.5841 19.5361 16.537C17.5831 18.49 14.4167 18.49 12.4637 16.537C10.5108 14.5841 10.5108 11.4177 12.4637 9.46472C14.4167 7.51176 17.5831 7.51176 19.5361 9.46472"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M26.146 28.3698C23.5949 25.6836 19.9967 24 16.0003 24C12.0038 24 8.4056 25.6836 5.85449 28.3716"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className={'text-b1-medium'}>
                                    로그아웃
                                </span>
                            </div>
                        </button>
                    )}
                    {!session.data && <CtaJoinButton />}
                </div>
            </nav>
        </header>
    )
}
