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
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight

            const newIndex = itemRefs.current.findIndex((el, idx) => {
                if (!el) return false
                const rect = el.getBoundingClientRect()
                const ratio = rect.bottom / viewportHeight
                return (
                    (idx === 0 && ratio <= 1 && ratio > 0.85) || // 첫 번째: 화면 60%쯤에 도달
                    (idx === 1 && ratio <= 0.85 && ratio > 0.65) || // 두 번째: 화면 30~60% 사이
                    (idx === 2 && ratio <= 0.65) // 세 번째: 화면 하단 근처
                )
            })

            if (newIndex !== -1 && newIndex !== inViewIndex) {
                setInViewIndex(newIndex)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [inViewIndex])

    return (
        <div
            className={
                'grid grid-cols-3 gap-x-[28px] max-md:flex max-md:flex-col max-md:space-y-4'
            }
        >
            {Children.map(children, (child, index) => {
                if (!isValidElement<ProblemProps>(child)) return child

                return (
                    <div
                        key={index}
                        ref={(el) => {
                            itemRefs.current[index] = el
                        }}
                    >
                        {cloneElement(child, {
                            focused: index === inViewIndex,
                        })}
                    </div>
                )
            })}
        </div>
    )
}

interface ProblemProps {
    focused?: boolean
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
    focused,
}: ProblemProps) => {
    return (
        <div
            className={clsx(
                'rounded max-md:rounded-[28px] p-8 max-md:p-5  flex flex-col aspect-square transition-all max-md:aspect-auto max-md:space-y-6 max-md:min-h-[200px]',
                'transition-colors duration-100',
                focused
                    ? '!text-neutral-0 bg-[#FFEAE2] bg-light-sunset'
                    : 'text-neutral-10 bg-neutral-95'
            )}
        >
            <div className={'space-y-4'}>
                <div className={'flex items-center justify-between'}>
                    <div
                        className={clsx(
                            'flex items-center justify-center w-[58px] h-[58px]  rounded-full max-md:w-8 max-md:h-8',
                            focused ? 'bg-neutral-0' : 'bg-neutral-10'
                        )}
                    >
                        <div
                            className={
                                'relative w-8 h-8 max-md:w-[18px] max-md:h-[18px]'
                            }
                        >
                            {image}
                        </div>
                    </div>

                    <span className={'text-h5-medium'}>{number}</span>
                </div>
                <div className={'text-h4-bold'}>{title}</div>
            </div>
            <div className={'mt-auto text-h5-medium'}>{children}</div>
        </div>
    )
}
