import { Section } from '@/components/landing/section'
import Image from 'next/image'
import { Product } from '@/components/landing/product'

export const PricingSection = () => {
    return (
        <Section
            title={<PricingSectionTitle />}
            label={<p className={'text-t1-bold text-accent-teal'}>Pricing</p>}
        >
            <div className={'grid grid-cols-3 gap-x-[28px] '}>
                <div className={'relative  flex items-center justify-center '}>
                    <Image
                        src={'/images/online-feedback.gif'}
                        alt={'Online Feedback'}
                        width={0}
                        height={0}
                        className={'z-10 w-[80%] aspect-square'}
                    />
                    <div
                        className={
                            'absolute left-0 top-0 bottom-0 w-full max-w-[33%] bg-accent-light-teal rounded'
                        }
                    ></div>
                </div>

                <div className={'col-span-2'}>
                    <Product
                        name={'콘텐츠 배너 게시권'}
                        price={'19,000원/월'}
                        guide={
                            '게시 후, 다른 콘텐츠에 피드백을 남겨야 상단 노출이 유지됩니다'
                        }
                        benefits={[
                            '콘텐츠 커뮤니티 노출',
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
        <div className={'text-neutral-0 text-h2-medium'}>
            <div className={'flex items-center space-x-3'}>
                <Image
                    src={'/images/pricing-info-1.svg'}
                    alt={'Solution'}
                    width={50}
                    height={50}
                />
                <span>콘텐츠 배너 게시로 누리는</span>
            </div>
            <div className={'flex items-center space-x-3'}>
                <span className={'text-h2-bold'}>실전 성장 혜택</span>
                <Image
                    src={'/images/pricing-info-2.svg'}
                    alt={'Solution'}
                    width={84}
                    height={50}
                />
            </div>
        </div>
    )
}
