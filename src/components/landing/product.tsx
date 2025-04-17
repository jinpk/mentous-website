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
                'flex flex-col rounded bg-neutral-95 py-10 px-8 space-y-[42px]'
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
                                width={18}
                                height={18}
                            />
                            <span>{child}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
