import { Section } from '@/components/landing/section'
import Image from 'next/image'
import { Step, Steps } from '@/components/landing/step'

export const SolutionSection = () => {
    return (
        <Section
            variation={'vertical'}
            title={<SolutionSectionTitle />}
            label={
                <p className={'text-t1-bold text-accent-purple'}>Solution</p>
            }
        >
            <Steps>
                <Step
                    number={'01'}
                    title={'콘텐츠 올리기'}
                    description={
                        <>
                            내 콘텐츠를 커뮤니티에 올리면,
                            <br />
                            바로 채널 홍보가 시작됩니다
                        </>
                    }
                    image={
                        <Image
                            fill
                            alt={'Solution 1'}
                            src={'/images/system-update.gif'}
                        />
                    }
                />
                <Step
                    number={'02'}
                    title={'피드백 받고 배우기'}
                    description={
                        <>
                            크리에이터들이 남기는 피드백으로,
                            <br />
                            실전 인사이트를 바로 얻을 수 있어요
                        </>
                    }
                    image={
                        <Image
                            fill
                            alt={'Solution 2'}
                            src={'/images/online-article-writing.gif'}
                        />
                    }
                />
                <Step
                    number={'03'}
                    title={'개선하고 반영하기'}
                    description={
                        <>
                            피드백으로 콘텐츠를 개선해 보세요
                            <br />
                            성과는 조회수, 시청 지속 시간 등의
                            <br />
                            지표로 즉시 확인할 수 있어요
                        </>
                    }
                    image={
                        <Image
                            fill
                            alt={'Solution 3'}
                            src={'/images/video-feedback.gif'}
                        />
                    }
                />
                <Step
                    number={'04'}
                    title={'다른 콘텐츠로 배우기'}
                    description={
                        <>
                            다른 사람의 콘텐츠와 피드백으로도
                            <br />
                            인사이트를 쌓을 수 있어요
                        </>
                    }
                    image={
                        <Image
                            fill
                            alt={'Solution 4'}
                            src={'/images/web-video.gif'}
                        />
                    }
                />
                <Step
                    number={'05'}
                    title={'직접 참여하고 리워드 받기'}
                    description={
                        <>
                            다른 콘텐츠에 피드백을 남기면 리워드가 쌓입니다
                            <br />내 콘텐츠를 상단에 노출시키는 데 꼭 필요합니다
                        </>
                    }
                    image={
                        <Image
                            fill
                            alt={'Solution 4'}
                            src={'/images/product-release.gif'}
                        />
                    }
                />
            </Steps>
        </Section>
    )
}

const SolutionSectionTitle = () => {
    return (
        <div
            className={
                'text-neutral-0 text-h2-medium flex items-center flex-col'
            }
        >
            그래서,
            <div className={'flex items-center relative'}>
                <Image
                    className={
                        'absolute -left-[96px] w-[84px] h-[50px] max-md:w-[48px] max-md:h-[28px] max-md:-left-[56px] '
                    }
                    src={'/images/solution-info-1.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
                <span>
                    <span className={'text-h2-bold'}>적은 비용</span>
                    으로
                </span>
            </div>
            <div className={'flex items-center relative'}>
                <span>
                    <span className={'text-h2-bold'}>
                        효과가 좋은 실전 노하우
                    </span>
                    를 담은
                </span>
                <Image
                    className={
                        'absolute -right-[62px] w-[50px] h-[50px] max-md:w-[28px] max-md:h-[28px] max-md:-right-[36px]'
                    }
                    src={'/images/solution-info-2.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
            </div>
            멘토스를 기획했습니다
        </div>
    )
}
