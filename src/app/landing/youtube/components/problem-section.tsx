import { Section } from '@/components/landing/section'
import { Problem, Problems } from '@/components/landing/problem'
import Image from 'next/image'

export const ProblemSection = () => {
    return (
        <Section
            title={
                <span>
                    내 채널,
                    <br />
                    대체 <span className={'text-h2-bold'}>어떻게</span> 성장
                    시켜야하지?
                </span>
            }
            label={<p className={' text-sunset'}>Problem</p>}
        >
            <Problems>
                <Problem
                    title={'지표작업'}
                    number="01"
                    image={
                        <Image src={'/images/chart.svg'} fill alt={'chart'} />
                    }
                >
                    댓글·좋아요·팔로워 조작? 알고리즘에 오히려 역효과예요.
                </Problem>
                <Problem
                    title={
                        <>
                            마케팅 대행사 및<br />
                            광고 의뢰
                        </>
                    }
                    number="02"
                    image={
                        <Image
                            src={'/images/book-read.svg'}
                            fill
                            alt={'book-read'}
                        />
                    }
                >
                    비싸고 비효율적이에요. 광고 없이도 성장할 수 있는 채널이
                    필요해요.
                </Problem>
                <Problem
                    title={
                        <>
                            컨설팅 및<br />
                            강의 수강
                        </>
                    }
                    number="03"
                    image={
                        <Image
                            src={'/images/document-chart.svg'}
                            fill
                            alt={'document-chart'}
                        />
                    }
                >
                    지나간 이론, 나와 다른 분야, 실전에 적용 어려워요. 게다가
                    비싸요.
                </Problem>
            </Problems>
        </Section>
    )
}
