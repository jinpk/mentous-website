import { EarlyAccessBoard } from '@/components/early-access-board'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Form } from '@/app/signup/components/form'

export default async function Page() {
    const session = await auth()
    if (session) {
        redirect('/')
    }
    return (
        <main className={'main'}>
            <div className={'grid grid-cols-2 py-20 items-center'}>
                <Form />
                <div className="flex flex-col items-center">
                    <EarlyAccessBoard />
                </div>
            </div>
        </main>
    )
}
