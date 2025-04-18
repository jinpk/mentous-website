import Image from 'next/image'

export const HeroSection = () => {
    return (
        <div className={'text-center relative'}>
            <div className={'flex flex-col items-center'}>
                <Image
                    src={'/images/yt.svg'}
                    alt={'Yt'}
                    width={70}
                    height={40}
                />
                <div className={'mt-6 mb-4'}>
                    <h1 className={'text-h2-medium text-neutral-30'}>
                        유튜브 채널 키우는 비밀,
                    </h1>
                    <p className={'text-h2-bold'}>‘멘토스’ 커뮤니티</p>
                </div>
                <p className={'text-neutral-30 text-h5-medium'}>
                    채널 성장에 갈증을 느껴온 유튜버들이 직접 만든 서비스입니다.
                    <br />
                    크리에이터들이 함께 배우고, 실험하고, 성장합니다.
                </p>
            </div>

            <div className={'relative h-[452px]'}>
                <Image
                    src={'/images/digital-business-meeting.gif'}
                    alt={'Digital Business Meeting'}
                    height={0}
                    width={0}
                    sizes={'100vw'}
                    className={
                        'aspect-square h-full w-auto z-10 relative mx-auto'
                    }
                />
                <div
                    className={
                        'bg-neutral-95 rounded h-[60%] absolute  bottom-0 w-full'
                    }
                ></div>
            </div>

            <button
                className={'mt-10 space-y-2 flex flex-col items-center mx-auto'}
            >
                <span className={'text-t1-medium text-neutral-30'}>
                    어떻게 성장하는지 확인해 보세요
                </span>
                <Image
                    src={'/images/down-arrow.gif'}
                    alt={'Down Arrow'}
                    width={62}
                    height={46}
                />
            </button>
        </div>
    )
}
