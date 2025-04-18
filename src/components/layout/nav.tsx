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

    const [open, setOpen] = useState(false)

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
                'w-full max-w-[var(--max-width)] mx-auto py-6 px-8 sticky top-0 z-[100] max-md:py-3 max-md:px-4',
                'transition-transform delay-100',
                show ? 'translate-y-0' : '-translate-y-full'
            )}
        >
            <nav
                className={clsx(
                    'z-[100] relative h-[var(--nav-height)] max-md:h-[56px] px-8 pr-4 max-md:px-4 max-md:pr-3 rounded grid grid-cols-3 items-center transition-all max-md:flex max-md:justify-between',
                    scrolled || open
                        ? 'bg-white/64 backdrop-blur-[56px] opacity-100 max-md:bg-white/80'
                        : 'bg-white/100 opacity-100'
                )}
            >
                <Link
                    href={'/'}
                    className={
                        'w-[188px] h-[30px] max-md:w-[100px] max-md:h-4 relative'
                    }
                >
                    <Image src={'/images/logo.svg'} alt={'Logo'} fill />
                </Link>

                <div className={'max-md:hidden'}>
                    <NavMenus />
                </div>

                <div className={'max-md:hidden'}>
                    <NavActions />
                </div>

                <div className={'hidden max-md:flex '}>
                    <button
                        className={'w-8 h-8 rounded-full bg-primary relative'}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M27.3137 4.6863C33.5621 10.9347 33.5621 21.0653 27.3137 27.3137C21.0653 33.5621 10.9347 33.5621 4.6863 27.3137C-1.5621 21.0653 -1.5621 10.9347 4.6863 4.6863C10.9347 -1.5621 21.0653 -1.5621 27.3137 4.6863Z"
                                fill="#202020"
                            />
                            <path
                                d="M9.77759 21.3334H22.222"
                                stroke="white"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.77759 16H22.222"
                                stroke="white"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.77759 10.6667H22.222"
                                stroke="white"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            <div
                className={clsx(
                    open ? 'flex' : 'hidden',
                    'fixed top-0 right-0 bottom-0 left-0 h-screen bg-primary/30 z-[99]'
                )}
            >
                <div className={'w-full m-4 mt-[84px] '}>
                    <div
                        className={
                            'bg-white/80 backdrop-blur-[56px] rounded-[28px] overflow-hidden'
                        }
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <NavMenus />
                        <NavActions />
                    </div>
                </div>
            </div>
        </header>
    )
}

export const NavActions = () => {
    const session = useSession()

    return (
        <div
            className={'flex justify-end max-md:flex-col max-md:items-stretch'}
        >
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
                        <span className={'text-b1-medium'}>로그아웃</span>
                    </div>
                </button>
            )}
            {!session.data && <CtaJoinButton applyResponsiveDesign />}
        </div>
    )
}

export const NavMenus = () => {
    return (
        <div
            className={
                'flex justify-center max-md:flex-col max-md:items-stretch text-b3-medium'
            }
        >
            <Link href={'/landing/youtube'}>
                <div
                    className={
                        'space-x-2 items-center transition-all hover:text-red flex group max-md:py-4 justify-center'
                    }
                >
                    <Image
                        src={'/images/yt-play.png'}
                        alt={'YT Play'}
                        width={0}
                        sizes={'100vw'}
                        height={0}
                        className={
                            'group-hover:hidden w-8 h-8 max-md:w-6 max-md:h-6'
                        }
                    />
                    <Image
                        src={'/images/yt-play-on.png'}
                        alt={'YT Play'}
                        width={0}
                        sizes={'100vw'}
                        height={0}
                        className={
                            'hidden group-hover:block w-8 h-8 max-md:w-6 max-md:h-6'
                        }
                    />

                    <span>유튜브</span>
                </div>
            </Link>
        </div>
    )
}
