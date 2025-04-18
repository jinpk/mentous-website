'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = () => {
    const pathname = usePathname()
    if (pathname.startsWith('/signup')) return null
    return (
        <div className={'flex flex-col'}>
            <div
                className={
                    'w-full max-w-[var(--max-width)] mx-auto p-8 max-md:p-4'
                }
            >
                <footer
                    className={
                        'w-full py-10 px-8 max-md:py-6 max-md:px-5 flex-col flex bg-neutral-95 rounded max-md:rounded-[28px]'
                    }
                >
                    <div className={'flex flex-col space-y-4'}>
                        <Link href={'/'}>
                            <div
                                className={
                                    'w-[150px] h-[24px] max-md:w-[125px] max-md:h-[20px] relative'
                                }
                            >
                                <Image
                                    src={'/images/logo.svg'}
                                    alt={'Logo'}
                                    fill
                                />
                            </div>
                        </Link>

                        <div
                            className={
                                'flex items-center text-neutral-10 text-b3-medium pt-2'
                            }
                        >
                            <Link href={'/policy/privacy'} target={'_blank'}>
                                개인정보 처리방침
                            </Link>
                            <span
                                className={
                                    'w-[1px] h-3.5 bg-neutral-50 mx-2 block'
                                }
                            />
                            <Link href={'/policy/terms'} target={'_blank'}>
                                서비스 이용약관
                            </Link>
                        </div>

                        <div
                            className={
                                'text-neutral-30 text-b3-medium space-y-2'
                            }
                        >
                            <div
                                className={
                                    'flex items-center max-md:flex-col max-md:items-start max-md:space-y-2'
                                }
                            >
                                <div className={'flex items-center'}>
                                    <span>주식회사 반에프</span>
                                    <span
                                        className={
                                            'w-[1px] h-3.5 bg-neutral-50 mx-2 block'
                                        }
                                    />
                                    <span>대표자 최원기</span>
                                </div>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2 max-md:hidden'
                                    }
                                />
                                <span>사업자등록번호 763-88-01715</span>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2 max-md:hidden'
                                    }
                                />
                                <span>
                                    통신판매업 신고번호 제2021-서울송파-1531호
                                </span>
                            </div>
                            <div
                                className={
                                    'flex items-center max-md:flex-col max-md:items-start max-md:space-y-2'
                                }
                            >
                                <span>
                                    주소 서울시 송파구 올림픽로 35가길 11, 5층
                                </span>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2 max-md:hidden'
                                    }
                                />
                                <span>이메일 mentousxyz@gmail.com</span>
                            </div>
                        </div>
                        <div
                            className={'w-full border-b border-b-neutral-50'}
                        />
                    </div>
                    <div className={'pt-4 text-neutral-30 text-[12px]'}>
                        Copyright © 2025 VAN.F. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    )
}
