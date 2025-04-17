import { LoginForm } from '@/app/auth/components/login-form'
import { EarlyAccessBoard } from '@/app/auth/components/early-access-board'

export default function Home() {
    return (
        <main className={'main'}>
            <div className={'grid grid-cols-2 py-20'}>
                <LoginForm />
                <div className="flex flex-col items-center">
                    <EarlyAccessBoard />
                </div>
            </div>
        </main>
    )
}
