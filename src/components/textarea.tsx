import { TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

export const Textarea = (
    props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
    return (
        <textarea
            {...props}
            className={clsx(
                'bg-neutral-95 min-h-20 h-auto resize-none focus:outline-primary rounded-[24px] text-b1-medium p-4  placeholder:text-neutral-30 text-neutral-0',
                props.className
            )}
        />
    )
}
