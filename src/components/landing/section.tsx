import { ReactNode } from 'react'
import clsx from 'clsx'

export const Section = ({
    label,
    title,
    children,
    variation,
}: {
    variation?: 'vertical' | 'horizontal'
    label: ReactNode
    title: ReactNode
    children: ReactNode
}) => {
    if (!variation) {
        variation = 'horizontal'
    }

    return (
        <section className={'space-y-14'}>
            <div
                className={clsx(
                    variation === 'horizontal' &&
                        'grid grid-cols-3 gap-x-[28px]',
                    variation === 'vertical' &&
                        'flex flex-col items-center text-center'
                )}
            >
                <div className={'py-4 px-8'}>{label}</div>
                <div className={'col-span-2 px-8'}>
                    <h2>{title}</h2>
                </div>
            </div>
            {children}
        </section>
    )
}
