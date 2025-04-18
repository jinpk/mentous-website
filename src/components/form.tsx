import { ReactNode } from 'react'

export const FormItem = ({ children }: { children: ReactNode }) => {
    return <div className={'flex flex-col space-y-2'}>{children}</div>
}

export const FormLabel = ({ children }: { children: ReactNode }) => {
    return <label className={'text-b3-bold px-4'}>{children}</label>
}
