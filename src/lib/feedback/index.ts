import { db } from '@/lib/firebase'
import { auth } from '@/lib/auth'

export interface CreateFeedbackRequest {
    content: string
}

export interface Feedback {
    content: string
    user: string
    createdAt: Date
}

export const createFeedback = async (request: CreateFeedbackRequest) => {
    const session = await auth()

    const faqsRef = db.collection('feedbacks')

    const querySnapshot = await faqsRef.add({
        content: request.content,
        user: session?.user?.id ?? '',
        createdAt: new Date(new Date().toUTCString()),
    } as Feedback)

    return {
        id: querySnapshot.id,
    }
}
