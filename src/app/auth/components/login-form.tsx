import Image from 'next/image'

export const LoginForm = () => {
    return (
        <div className={'flex flex-col items-center space-y-6'}>
            <div>
                <p className={'text-[20px] text-neutral-30'}>
                    유튜브 채널 키우는 비밀, ‘멘토스’ 커뮤니티
                </p>
                <h1 className={'text-[40px] text-primary font-bold'}>
                    무료 멤버십 가입하기
                </h1>
            </div>

            <p className={'text-[20px] text-neutral-10'}>
                유튜버들이 최선을 다해 커뮤니티를 개발하고 있어요
            </p>

            <button>
                <Image
                    src={'/images/kakao-login.png'}
                    alt={'Kakao Login'}
                    width={320}
                    height={48}
                />
            </button>
        </div>
    )
}
