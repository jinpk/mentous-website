'use client'

import {
    Children,
    cloneElement,
    isValidElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react'
import clsx from 'clsx'

export const Problems = ({ children }: { children: ReactNode }) => {
    const [inViewIndex, setInViewIndex] = useState(0)
    return (
        <div
            className={
                'grid grid-cols-3 gap-x-[28px] max-md:flex max-md:flex-col max-md:space-y-4'
            }
        >
            {Children.map(children, (child, index) => {
                if (!isValidElement<ProblemProps>(child)) return child

                return cloneElement(child, {
                    key: index,
                    inView: index === inViewIndex,
                    onInView: () => {
                        setInViewIndex(index)
                    },
                })
            })}
        </div>
    )
}

interface ProblemProps {
    inView?: boolean
    onInView?: () => void
    children: ReactNode
    image: ReactNode
    number: ReactNode
    title: ReactNode
}

export const Problem = ({
    children,
    number,
    image,
    title,
    inView,
    onInView,
}: ProblemProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && onInView) {
                    onInView()
                }
            },
            {
                threshold: 0.5,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [onInView])

    return (
        <div
            ref={ref}
            className={clsx(
                'rounded p-8  flex flex-col aspect-square transition-all max-md:aspect-auto max-md:space-y-6',
                inView
                    ? '!text-neutral-0 bg-[#FFEAE2]'
                    : 'text-neutral-10 bg-neutral-95'
            )}
        >
            <div className={'space-y-4'}>
                <div className={'flex items-center justify-between'}>
                    <div
                        className={clsx(
                            'flex items-center justify-center w-[58px] h-[58px]  rounded-full',
                            inView ? 'bg-neutral-0' : 'bg-neutral-10'
                        )}
                    >
                        {image}
                    </div>

                    <span className={'text-h5-medium'}>{number}</span>
                </div>
                <div className={'text-h4-bold'}>{title}</div>
            </div>
            <div className={'mt-auto text-h5-medium'}>{children}</div>
        </div>
    )
}
