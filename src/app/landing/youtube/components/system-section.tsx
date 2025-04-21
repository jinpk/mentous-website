import { Section } from '@/components/landing/section'
import Image from 'next/image'

export const SystemSection = () => {
    return (
        <Section
            title={<SystemSectionTitle />}
            label={
                <p className={'text-t1-bold text-accent-green'}>
                    Growth System
                </p>
            }
        >
            <div className={'relative'}>
                <Image
                    src={'/images/table.svg'}
                    alt={'Table'}
                    sizes={'100vw'}
                    width={0}
                    height={0}
                    className={
                        'w-[calc(100%-64px)] h-auto relative z-[2] mx-auto max-md:w-[calc(100%-40px)]'
                    }
                />

                <div className={'h-[120px] max-md:h-[100px]'} />
                <div
                    className={
                        'w-full h-3/10 max-md:h-5/10 rounded absolute bottom-0 left-0 right-0 bg-[#E9FACF] max-md:rounded-[28px]'
                    }
                />
            </div>
        </Section>
    )
}

const SystemSectionTitle = () => {
    return (
        <div
            className={
                'text-neutral-0 text-h2-medium text-center flex flex-col items-start max-md:items-center'
            }
        >
            <div
                className={
                    'flex items-center relative space-x-4 max-md:space-x-2'
                }
            >
                <Image
                    className={
                        'w-[50px] h-[50px] max-md:w-[28px] max-md:h-[28px]'
                    }
                    src={'/images/system-info-1.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
                <span>유튜버를 위한</span>
            </div>
            <div
                className={
                    'flex items-center relative text-center space-x-4 max-md:space-x-2'
                }
            >
                <span>
                    <span>진짜 </span>
                    <span className={'text-h2-bold'}>성장 시스템</span>
                </span>
                <Image
                    className={
                        ' w-[125px] h-[50px] max-md:w-[62px] max-md:h-[25px]'
                    }
                    src={'/images/system-info-2.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
            </div>
        </div>
    )
}
