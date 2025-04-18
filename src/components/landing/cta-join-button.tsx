'use client'

import Link from 'next/link'
import { Button } from '@/components/button'
import clsx from 'clsx'

export const CtaJoinButton = ({
    applyResponsiveDesign,
}: {
    applyResponsiveDesign?: boolean
}) => {
    return (
        <Link href={'/signup'}>
            <Button
                className={clsx(
                    applyResponsiveDesign &&
                        'max-md:w-full max-md:rounded-none max-md:py-4 max-md:text-[14px]/[22px]'
                )}
            >
                멤버십 무료가입
            </Button>
        </Link>
    )
}
