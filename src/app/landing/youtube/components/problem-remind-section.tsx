import Image from 'next/image'

export const ProblemRemindSection = () => {
    return (
        <section
            className={'space-y-8 max-md:space-y-4 flex flex-col items-center'}
        >
            <Image
                src={'/images/”.svg'}
                alt={'”'}
                width={0}
                height={0}
                className={'w-[22px] h-[20px] max-md:w-2 max-md:h-2'}
            />
            <h3 className={'text-h4-medium text-neutral-30 text-center'}>
                결국, 중요한건 알고리즘에 최적화된 콘텐츠를 만들고 알리는 것
                <br />
                혼자서는 막막하고, 너무 어려웠죠
            </h3>
            <Image
                src={'/images/”.svg'}
                alt={'”'}
                width={0}
                height={0}
                className={'w-[22px] h-[20px] max-md:w-2 max-md:h-2'}
            />
        </section>
    )
}
