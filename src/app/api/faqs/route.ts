import { NextResponse } from 'next/server'
import admin from 'firebase-admin'

const cert: admin.AppOptions = JSON.parse(process.env.FIREBASE_CERT as string)
admin.initializeApp(cert)
const db = admin.firestore()

export async function GET() {
    const querySnapshot = await db.collection('faqs').get()

    const data: admin.firestore.DocumentData[] = []

    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })

    return NextResponse.json({
        faqs: data,
    })
}
