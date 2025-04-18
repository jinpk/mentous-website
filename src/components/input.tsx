import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className={clsx(
                'bg-neutral-95 focus:outline-primary rounded-[56px] rounded-[24px] text-b1-medium p-4  placeholder:text-neutral-30 text-neutral-0',
                props.className
            )}
        />
    )
}
