import { NextResponse } from 'next/server'
import { listFaqs } from '@/lib/faq'

export async function GET() {
    const response = await listFaqs()

    return NextResponse.json(response)
}
