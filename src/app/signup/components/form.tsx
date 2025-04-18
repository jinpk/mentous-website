'use client'

import { Controller, useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { FormItem, FormLabel } from '@/components/form'
import { signIn } from 'next-auth/react'

interface FormValues {
    [key: string]: string

    phoneNumber: string
    displayName: string
}

export const Form = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            phoneNumber: '',
            displayName: '',
        },
    })

    const onSubmit = (values: FormValues) => {
        if (
            !values.phoneNumber.startsWith('010') ||
            values.phoneNumber.length !== 11
        ) {
            alert('010으로 시작하는 올바른 번호를 입력해 주세요.')
            return
        }

        signIn('credentials', { ...values, redirectTo: '/' })
    }

    const phoneNumber = form.watch('phoneNumber')
    const displayName = form.watch('displayName')

    return (
        <div className={'flex flex-col space-y-10 items-center'}>
            <h2 className={'text-h4-bold text-primary'}>회원가입</h2>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={'flex flex-col space-y-6 w-full max-w-[440px]'}
            >
                <Controller
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>이름</FormLabel>
                            <Input
                                {...field}
                                placeholder={'이름을 입력해 주세요'}
                            />
                        </FormItem>
                    )}
                    name={'displayName'}
                    control={form.control}
                />

                <Controller
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>휴대폰번호</FormLabel>
                            <Input
                                {...field}
                                type={'number'}
                                placeholder={'숫자만 입력해 주세요'}
                            />
                        </FormItem>
                    )}
                    name={'phoneNumber'}
                    control={form.control}
                />

                <Button disabled={!phoneNumber || !displayName}>
                    가입하기
                </Button>
            </form>
        </div>
    )
}
