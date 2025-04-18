import { db } from '@/lib/firebase'

export interface Faq {
    answer: string
    question: string
}

export const listFaqs = async () => {
    const faqsRef = db.collection('faqs')

    const querySnapshot = await faqsRef.listDocuments()

    const faqs: Faq[] = []

    for (const faqRef of querySnapshot) {
        const doc = await faqRef.get()
        const data = doc.data() as Faq
        if (data) {
            faqs.push(data)
        }
    }

    return { faqs }
}
