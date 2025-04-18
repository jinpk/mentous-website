import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'w-full max-w-[var(--max-width)] mx-auto p-8'}>
                <footer
                    className={
                        'w-full py-10 px-8 flex-col flex bg-neutral-95 rounded'
                    }
                >
                    <div className={'flex flex-col space-y-6'}>
                        <Link href={'/public'}>
                            <div className={'w-[150px] h-[24px] relative'}>
                                <Image
                                    src={'/images/logo.svg'}
                                    alt={'Logo'}
                                    fill
                                />
                            </div>
                        </Link>

                        <div
                            className={'text-neutral-10 text-[14px] space-y-2'}
                        >
                            <div className={'flex items-center'}>
                                <span>주식회사 반에프</span>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2 block'
                                    }
                                />
                                <span>대표자 최원기</span>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2'
                                    }
                                />
                                <span>사업자등록번호 763-88-01715</span>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2'
                                    }
                                />
                                <span>
                                    통신판매업 신고번호 제2021-서울송파-1531호
                                </span>
                            </div>
                            <div className={'flex items-center'}>
                                <span>
                                    주소 서울시 송파구 올림픽로 35가길 11, 5층
                                </span>
                                <span
                                    className={
                                        'w-[1px] h-3.5 bg-neutral-50 mx-2'
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
