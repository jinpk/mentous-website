import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'

export async function GET() {
    const faqsRef = db.collection('faqs')

    const querySnapshot = await faqsRef.listDocuments()

    const faqs: object[] = []

    for (const faqRef of querySnapshot) {
        const doc = await faqRef.get()
        const data = doc.data()
        if (data) {
            faqs.push(data)
        }
    }

    return NextResponse.json({
        faqs,
    })
}
