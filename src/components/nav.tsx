'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/button'
import clsx from 'clsx'

export const Nav = () => {
    return (
        <header
            className={clsx(
                'w-full max-w-[var(--max-width)] mx-auto py-6 px-8 sticky top-0 backdrop-blur-[56px] bg-white/80'
            )}
        >
            <nav
                className={clsx(
                    'h-20 px-8 pr-4 rounded grid grid-cols-3 items-center'
                )}
            >
                <Link href={'/'} className={'w-[188px] h-[30px] relative'}>
                    <Image src={'/images/logo.png'} alt={'Logo'} fill />
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
                    <Link href={'/'}>
                        <Button>멤버십 무료가입</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
