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
        <section className={'space-y-14 max-md:space-y-8'}>
            <div
                className={clsx(
                    variation === 'horizontal' &&
                        'grid grid-cols-3 gap-x-[28px]',
                    variation === 'vertical' &&
                        'flex flex-col items-center text-center',
                    'max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:space-y-3'
                )}
            >
                <div
                    className={'text-t1-bold py-4 px-8 max-md:py-0 max-md:px-0'}
                >
                    {label}
                </div>
                <div className={'text-h2-medium col-span-2 px-8'}>
                    <h2>{title}</h2>
                </div>
            </div>
            {children}
        </section>
    )
}
