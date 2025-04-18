'use client'

import Link from 'next/link'
import { Button } from '@/components/button'

export const CtaJoinButton = () => {
    return (
        <Link href={'/signup'}>
            <Button>멤버십 무료가입</Button>
        </Link>
    )
}
