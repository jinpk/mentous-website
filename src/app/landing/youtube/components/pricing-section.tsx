import { Section } from '@/components/landing/section'
import Image from 'next/image'
import { Product } from '@/components/landing/product'

export const PricingSection = () => {
    return (
        <Section
            title={<PricingSectionTitle />}
            label={<p className={'text-t1-bold text-accent-teal'}>Pricing</p>}
        >
            <div
                className={
                    'grid grid-cols-3 gap-x-[28px] max-md:flex max-md:flex-col max-md:space-y-5'
                }
            >
                <div
                    className={
                        'relative  flex flex-col items-center justify-center'
                    }
                >
                    <Image
                        src={'/images/online-feedback.gif'}
                        alt={'Online Feedback'}
                        width={0}
                        height={0}
                        className={
                            'z-10 w-[80%] aspect-square max-md:w-[73%] max-md:self-end'
                        }
                    />
                    <div
                        className={
                            'absolute left-0 top-0 bottom-0 w-full max-w-[33%] bg-accent-light-teal rounded max-md:max-w-[40%] max-md:rounded-[28px]'
                        }
                    ></div>
                </div>

                <div className={'col-span-2'}>
                    <Product
                        name={'콘텐츠 배너 게시권'}
                        price={'19,000원/월'}
                        guide={
                            '게시 후, 다른 콘텐츠에 피드백을 남기면 아래 효과가 더 좋아집니다'
                        }
                        benefits={[
                            '콘텐츠 전방위 게시',
                            '실전 중심 피드백 제공 (전문가 및 유튜버)',
                            '콘텐츠 SEO 노출 지원 외부 유입 증대',
                            '조회수 및 시청률 핵심 지표 향상',
                            '콘텐츠 알고리즘 최적화',
                        ]}
                    />
                </div>
            </div>
        </Section>
    )
}

const PricingSectionTitle = () => {
    return (
        <div
            className={
                'text-neutral-0 text-h2-medium text-center flex flex-col items-start max-md:items-center'
            }
        >
            <div className={'flex items-center relative'}>
                <Image
                    className={
                        'absolute -left-[62px] w-[50px] h-[50px] max-md:w-[28px] max-md:h-[28px] max-md:-left-[36px]'
                    }
                    src={'/images/pricing-info-1.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
                <span>콘텐츠 배너 게시로 누리는</span>
            </div>
            <div className={'flex items-center relative text-center'}>
                <span className={'text-h2-bold'}>실전 성장 혜택</span>
                <Image
                    className={
                        'absolute -right-[96px] w-[84px] h-[50px] max-md:w-[48px] max-md:h-[28px] max-md:-right-[8px] '
                    }
                    src={'/images/pricing-info-2.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
            </div>
        </div>
    )
}
