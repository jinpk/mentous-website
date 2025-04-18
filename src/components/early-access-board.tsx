import Image from 'next/image'

export const EarlyAccessBoard = () => {
    return (
        <div
            className={
                'rounded-[16px] border border border-neutral-70 w-full max-w-[var(--width-card)] flex flex-col items-center pb-6'
            }
        >
            <div
                className={
                    'bg-neutral-95 py-6 px-8 rounded-t-[16px] space-y-1 self-stretch'
                }
            >
                <div className={'flex items-center justify-between'}>
                    <p className={'font-bold text-[18px]'}>6월 1일 출시</p>
                    <span
                        className={'rounded-full bg-sunset w-3 h-3 blink-dot'}
                    ></span>
                </div>
                <span className={'text-neutral-20 text-[15px]'}>
                    제품이 출시되면 카카오톡으로 알림을 보내드립니다
                </span>
            </div>

            <div className={'flex flex-col items-center p-6 space-y-6'}>
                <div className={'text-center'}>
                    <p className={'text-[18px] text-neutral-30'}>
                        총 가입자 수
                    </p>
                    <h3 className={'font-bold text-neutral-0 text-[40px]'}>
                        24,322
                    </h3>
                </div>
            </div>

            <Image
                src={'/images/messaging-services.gif'}
                alt={'Messaging Service'}
                width={240}
                height={240}
            />
        </div>
    )
}
