'use client'

import { ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

type Color = 'accent-blue' | 'primary'

export const Button = ({
    children,
    color,
}: {
    children: ReactNode
    color?: Color
}) => {
    if (!color) {
        color = 'primary'
    }

    const colorClasses: { [key in Color]: ClassValue } = {
        ['primary']:
            'bg-primary text-neutral-100 hover:bg-primary-20' as ClassValue,
        ['accent-blue']:
            'bg-accent-blue text-neutral-100 hover:bg-[#1851E2]' as ClassValue,
    }

    return (
        <button
            className={clsx(
                'transition-all',
                colorClasses[color],
                'py-3 px-4 rounded',
                'text-b1-medium',
                'cursor-pointer'
            )}
        >
            {children}
        </button>
    )
}
