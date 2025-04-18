import { EarlyAccessBoard } from '@/components/early-access-board'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { FeedbackForm } from '@/app/(home)/components/feedback-form'

export default async function Home() {
    const session = await auth()

    if (!session) {
        redirect('/landing/youtube')
    }

    return (
        <main className={'main'}>
            <div
                className={
                    'grid grid-cols-2 py-20 items-center max-md:flex max-md:flex-col max-md:items-stretch max-md:py-6 max-md:pb-20 max-md:space-y-15'
                }
            >
                <FeedbackForm />
                <div className="flex flex-col items-center">
                    <EarlyAccessBoard />
                </div>
            </div>
        </main>
    )
}
