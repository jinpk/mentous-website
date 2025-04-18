'use client'

import { useSession } from 'next-auth/react'
import { Button } from '@/components/button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Textarea } from '@/components/textarea'
import Image from 'next/image'
import { CreateFeedbackRequest } from '@/lib/feedback'

export const FeedbackForm = () => {
    const session = useSession()
    const [submiited, setSubmitted] = useState(false)
    const form = useForm<CreateFeedbackRequest>({
        defaultValues: {
            content: '',
        },
    })

    const onSubmit = async (values: CreateFeedbackRequest) => {
        console.log('d')
        if (submiited) {
            form.reset()
            setSubmitted(false)
            return
        }

        const res = await fetch(`/api/feedbacks`, {
            method: 'POST',
            body: JSON.stringify(values),
        })

        if (res.status >= 400) {
            alert('Failed.')
            return
        }

        setSubmitted(true)
    }

    const content = form.watch('content')

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={
                'flex flex-col space-y-6 max-md:space-y-4 text-center w-full max-w-[var(--width-card)] max-md:max-w-full mx-auto'
            }
        >
            <div>
                <div className={'text-h5-medium text-neutral-30'}>
                    {!submiited && <p>유튜브 채널 성장은, 멘토스</p>}
                    {submiited && <p>피드백 전달 완료</p>}
                </div>
                <div className={'text-h2-bold text-primary'}>
                    {!submiited && (
                        <h1>{session.data?.user?.name ?? ''}님, 안녕하세요</h1>
                    )}

                    {submiited && <h1>소중한 의견 감사합니다</h1>}
                </div>
            </div>

            <div className={'text-h5-medium text-neutral-10'}>
                {!submiited && (
                    <p>
                        서비스에 바라는 기능, 유튜버로써 어려웠던 점을
                        <br />
                        공유해 주시면 적극 반영할게요
                    </p>
                )}
                {submiited && (
                    <p>
                        창작자로서 느끼신 점은 누구보다 소중해요
                        <br />더 나은 서비스를 위해 적극 반영할게요!
                    </p>
                )}
            </div>

            <>
                {!submiited && (
                    <Textarea
                        placeholder={'내용 입력'}
                        {...form.register('content')}
                    />
                )}
                {submiited && (
                    <Image
                        src={'/images/employee-contract.gif'}
                        alt={'Submitted'}
                        width={0}
                        height={0}
                        className={
                            'self-center w-[160px] h-auto max-md:w-[120px]'
                        }
                        sizes={'100vw'}
                    />
                )}
            </>

            <Button disabled={!content}>
                {submiited ? '추가로 공유하기' : '공유하기'}
            </Button>
        </form>
    )
}
