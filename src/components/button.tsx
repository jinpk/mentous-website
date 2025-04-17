'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

export const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button
            className={clsx(
                'bg-primary text-neutral-100',
                'py-3 px-4 rounded',
                'text-[16px]',
                'hover:bg-primary-20',
                'cursor-pointer'
            )}
        >
            {children}
        </button>
    )
}
