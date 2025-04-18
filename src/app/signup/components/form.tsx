'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

export const Form = () => {
    return (
        <div
            className={
                'flex flex-col items-center space-y-6 max-md:space-y-4 text-center'
            }
        >
            <div>
                <p className={'text-h5-medium text-neutral-30'}>
                    유튜브 채널 키우는 비밀, ‘멘토스’ 커뮤니티
                </p>
                <h1 className={'text-h2-bold text-primary'}>
                    무료 멤버십 가입하기
                </h1>
            </div>

            <p className={'text-h5-medium  text-neutral-10'}>
                유튜버들이 최선을 다해 커뮤니티를 개발하고 있어요
            </p>

            <button onClick={() => signIn('kakao', { redirectTo: '/' })}>
                <Image
                    src={'/images/kakao-login.png'}
                    alt={'Kakao Login'}
                    className={'w-[320px] max-md:w-[240px] h-auto'}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                />
            </button>
        </div>
    )
}
