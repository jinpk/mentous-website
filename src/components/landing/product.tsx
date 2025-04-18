import { ReactNode } from 'react'
import Image from 'next/image'

export const Product = (props: {
    name: ReactNode
    price: ReactNode
    guide: ReactNode
    benefits: ReactNode[]
}) => {
    return (
        <div
            className={
                'flex flex-col rounded bg-neutral-95 py-10 px-8 space-y-[42px] max-md:space-y-6 max-md:rounded-[28px] max-md:py-6 max-md:px-5'
            }
        >
            <div className={'space-y-2'}>
                <p className={'text-h5-medium text-accent-teal'}>
                    {props.name}
                </p>
                <p className={'text-h3-bold text-neutral-0'}>{props.price}</p>
                <p className={'text-b3-medium text-neutral-10'}>
                    {props.guide}
                </p>
            </div>

            <div className={'space-y-2'}>
                {props.benefits.map((child, index) => {
                    return (
                        <div
                            className={
                                'flex items-center space-x-[7px] text-b1-medium'
                            }
                            key={index}
                        >
                            <Image
                                src={'/images/product-benefit-icon.svg'}
                                alt={'Benefit'}
                                className={
                                    'w-[18px] h-[18px] max-md:w-4 max-md:h-4'
                                }
                                width={0}
                                height={0}
                            />
                            <span>{child}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
