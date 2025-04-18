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
                    <span>지금 바로 무료 멤버십에 가입하고,</span>
                    <span className={'text-h2-bold'}>
                        성장하는 크리에이터들의
                    </span>
                    <span>
                        <span className={'text-h2-bold'}>커뮤니티</span>에
                        참여해보세요!
                    </span>
                </div>
            </h2>

            <CtaJoinButton />
        </div>
    )
}
