import { NextRequest, NextResponse } from 'next/server'
import { createFeedback, CreateFeedbackRequest } from '@/lib/feedback'

export async function POST(request: NextRequest) {
    const createFeedbackRequest =
        (await request.json()) as CreateFeedbackRequest
    const createFeedbackResponse = await createFeedback(createFeedbackRequest)
    return NextResponse.json(createFeedbackResponse)
}
