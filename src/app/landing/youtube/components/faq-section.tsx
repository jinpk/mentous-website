'use client'

import { Section } from '@/components/landing/section'
import Image from 'next/image'
import { Button } from '@/components/button'
import { useEffect, useState } from 'react'
import { Faq, Faqs } from '@/components/landing/faq'
import Link from 'next/link'
import type { Faq as FaqResource } from '@/lib/faq'
export const FaqSection = () => {
    const [faqs, setFaqs] = useState<FaqResource[]>([])

    useEffect(() => {
        fetch(`/api/faqs`)
            .then((res) => res.json())
            .then((data) => setFaqs(data.faqs))
            .catch(console.error)
    }, [])

    return (
        <Section
            variation={'vertical'}
            title={<FaqSectionTitle />}
            label={<p className={'text-t1-bold text-accent-blue'}>FAQ</p>}
        >
            <Faqs>
                {faqs.map((faq, index) => (
                    <Faq
                        key={index}
                        answer={faq.answer}
                        question={faq.question}
                        number={index + 1}
                    />
                ))}
            </Faqs>
            <div
                className={
                    'text-center text-h5-medium text-neutral-30 space-y-6 flex flex-col items-center'
                }
            >
                <span>
                    더 궁금한 사항이 있으신가요?
                    <br />
                    서비스에 바라는 기능 혹은 궁금한 점을 공유해 주세요!
                    <br />
                    적극 반영됩니다
                </span>
                <Link href={'/?to=feedback'}>
                    <Button color={'accent-blue'}>문의하기</Button>
                </Link>
            </div>
        </Section>
    )
}

const FaqSectionTitle = () => {
    return (
        <div
            className={
                'text-neutral-0 text-h2-medium flex items-center flex-col'
            }
        >
            <span>
                <span className={'text-h2-bold'}>자주 묻는 질문</span>들만
            </span>

            <div className={'flex items-center relative'}>
                <span>모아봤어요</span>

                <Image
                    className={
                        'absolute -right-[62px] w-[50px] h-[50px] max-md:w-[28px] max-md:h-[28px] max-md:-right-[36px]'
                    }
                    src={'/images/faq-info-1.svg'}
                    alt={'Solution'}
                    width={0}
                    height={0}
                />
            </div>
        </div>
    )
}
