import { EarlyAccessBoard } from '@/components/early-access-board'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { FeedbackForm } from '@/app/(home)/components/feedback-form'

export default async function Home() {
    const session = await auth()

    if (!session) {
        redirect('/signup')
    }

    return (
        <main className={'main'}>
            <div className={'grid grid-cols-2 py-20 items-center'}>
                <FeedbackForm />
                <div className="flex flex-col items-center">
                    <EarlyAccessBoard />
                </div>
            </div>
        </main>
    )
}
