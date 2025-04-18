import Image from 'next/image'

export const EarlyAccessBoard = () => {
    return (
        <div
            className={
                'rounded-[16px] max-md:rounded-[28px] border border border-neutral-70 w-full max-w-[var(--width-card)] max-md:max-w-full flex flex-col items-center pb-6'
            }
        >
            <div
                className={
                    'bg-neutral-95 py-6 px-8 max-md:py-4 max-md:px-6 rounded-t-[16px] max-md:rounded-t-[28px] space-y-1 self-stretch'
                }
            >
                <div className={'flex items-center justify-between'}>
                    <p className={'text-t1-bold'}>6월 1일 출시</p>
                    <span
                        className={
                            'rounded-full bg-sunset w-3 h-3 blink-dot max-md:w-[9px] max-md:h-[9px]'
                        }
                    ></span>
                </div>
                <span className={'text-neutral-20 text-b2-medium'}>
                    제품이 출시되면 카카오톡으로 알림을 보내드립니다
                </span>
            </div>

            <div
                className={
                    'flex flex-col items-center p-6 space-y-6 max-md:p-4 max-md:space-y-4'
                }
            >
                <div className={'text-center'}>
                    <p className={'text-t1-medium text-neutral-30'}>
                        총 가입자 수
                    </p>
                    <h3
                        className={
                            'text-neutral-0 text-h2-bold max-md:text-[30px]/[43px]'
                        }
                    >
                        342
                    </h3>
                </div>
            </div>

            <Image
                src={'/images/messaging-services.gif'}
                alt={'Messaging Service'}
                width={0}
                height={0}
                className={
                    'w-[240px] h-[240px] max-md:w-[160px] max-md:h-[160px]'
                }
            />
        </div>
    )
}
