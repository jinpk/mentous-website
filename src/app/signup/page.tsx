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
            <div className={'py-10'}>
                <Form />
            </div>
        </main>
    )
}
