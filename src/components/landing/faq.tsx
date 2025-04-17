'use client'

import clsx from 'clsx'
import { ReactNode, useState } from 'react'

interface FaqProps {
    answer: ReactNode
    question: ReactNode
    number: ReactNode
}

export const Faqs = ({ children }: { children: ReactNode }) => {
    return (
        <div className={'flex flex-col mx-auto w-full max-w-[908px]'}>
            {children}
        </div>
    )
}

export const Faq = (props: FaqProps) => {
    const [opened, setOpened] = useState(false)

    return (
        <div
            className={clsx(
                'first-of-type:border-t border-b border-neutral-70'
            )}
        >
            <button
                className={'w-full group'}
                onClick={() => {
                    setOpened((prev) => !prev)
                }}
            >
                <div
                    className={clsx(
                        'px-8 py-10 flex  space-x-[28px] transition-all ',
                        !opened && 'group-hover:bg-accent-light-blue'
                    )}
                >
                    <div className={'text-h5-medium text-neutral-10 min-w-12'}>
                        Q{props.number}
                    </div>

                    <div className={'flex-1 text-start'}>
                        <div
                            className={clsx(
                                'text-h4-bold text-neutral-10 group-hover:text-neutral-0',
                                opened && '!text-neutral-0'
                            )}
                        >
                            {props.question}
                        </div>
                        {opened && (
                            <div
                                className={
                                    'pt-[28px] text-neutral-0 text-h5-medium'
                                }
                            >
                                {props.answer}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className={'w-9 h-9 relative'}>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {opened && (
                                    <path
                                        d="M29.3328 17.6665L5.99943 17.6665"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        className={clsx(
                                            'stroke-neutral-10 group-hover:stroke-neutral-0',
                                            opened && '!stroke-neutral-0'
                                        )}
                                    />
                                )}
                                {!opened && (
                                    <>
                                        <path
                                            d="M17.6665 6L17.6665 29.3333"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            className={clsx(
                                                'stroke-neutral-10 group-hover:stroke-neutral-0',
                                                opened && '!stroke-neutral-0'
                                            )}
                                        />
                                        <path
                                            d="M29.3333 17.6665L5.99992 17.6665"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            className={clsx(
                                                'stroke-neutral-10 group-hover:stroke-neutral-0',
                                                opened && '!stroke-neutral-0'
                                            )}
                                        />
                                    </>
                                )}
                            </svg>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}
