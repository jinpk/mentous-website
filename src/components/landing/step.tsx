import { ReactNode, Children } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

export const Steps = ({ children }: { children: ReactNode }) => {
    return (
        <div className={'w-full mx-auto max-w-[908px] relative'}>
            {Children.map(children, (child, index) => {
                return (
                    <div
                        key={index}
                        className={clsx('w-full flex-col flex items-center')}
                    >
                        {index > 0 && (
                            <Image
                                src={
                                    index % 2 === 0
                                        ? '/images/step-divider-to-even.svg'
                                        : '/images/step-divider-to-odd.svg'
                                }
                                alt={'to even'}
                                width={0}
                                height={0}
                                className={'h-auto w-[50%] max-md:w-[80%]'}
                                sizes={'100vw'}
                            />
                        )}

                        <div
                            className={clsx(
                                index % 2 === 0
                                    ? 'self-start'
                                    : 'self-end max-sm:self-start',
                                'w-auto'
                            )}
                        >
                            {child}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export const Step = (props: {
    number: ReactNode
    title: ReactNode
    description: ReactNode
    image: ReactNode
}) => {
    return (
        <div
            className={
                'py-[42px] max-md:py-[21px]  px-8 max-md:px-0  space-x-[28px] max-md:space-x-5 flex items-center'
            }
        >
            <div className={'h-40 max-md:h-[104px] aspect-square relative'}>
                {props.image}
            </div>
            <div
                className={
                    'flex flex-col space-y-4  max-md:space-y-2 text-neutral-0 text-h5-medium flex-1'
                }
            >
                <p className={''}>Step {props.number}</p>
                <h4 className={'text-h4-bold'}>{props.title}</h4>
                <p className={'text-neutral-30'}>{props.description}</p>
            </div>
        </div>
    )
}
