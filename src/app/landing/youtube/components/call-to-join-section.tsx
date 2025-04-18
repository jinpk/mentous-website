import Image from 'next/image'
import { CtaJoinButton } from '@/components/landing/cta-join-button'

export const CallToJoinSection = () => {
    return (
        <div
            className={'flex flex-col items-center space-y-6 max-md:space-y-4'}
        >
            <Image
                className={'w-16 h-12 max-md:w-8 max-md:h-6'}
                src={'/images/icon.svg'}
                alt={'Solution'}
                width={64}
                height={48}
            />

            <h2>
                <div
                    className={
                        'text-neutral-0 text-h2-medium flex items-center flex-col'
                    }
                >
                    <span>지금 바로</span>
                    <span>
                        <span className={'text-h2-bold'}>성장하는 유튜버</span>
                        들의 <span className={'text-h2-bold'}>비밀</span>
                    </span>

                    <span>
                        <span className={'text-h2-bold'}>멘토스</span>에
                        가입하세요!
                    </span>
                </div>
            </h2>

            <CtaJoinButton />
        </div>
    )
}
