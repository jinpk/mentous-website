'use client'

import { ButtonHTMLAttributes } from 'react'
import clsx, { ClassValue } from 'clsx'

type Color = 'accent-blue' | 'primary'

export const Button = (
    props: {
        color?: Color
    } & ButtonHTMLAttributes<HTMLButtonElement> = { color: 'primary' }
) => {
    const colorClasses: { [key in Color]: ClassValue } = {
        ['primary']:
            'bg-primary text-neutral-100 hover:bg-primary-20' as ClassValue,
        ['accent-blue']:
            'bg-accent-blue text-neutral-100 hover:bg-[#1851E2]' as ClassValue,
    }

    return (
        <button
            {...props}
            className={clsx(
                'transition-all',
                colorClasses[props.color || 'primary'],
                'py-3 px-4 rounded max-md:py-2 max-md:px-3',
                'text-b1-medium',
                'cursor-pointer',
                props.className
            )}
        >
            {props.children}
        </button>
    )
}
