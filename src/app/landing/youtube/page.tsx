import { HeroSection } from '@/app/landing/youtube/components/hero-section'
import { ProblemSection } from '@/app/landing/youtube/components/problem-section'
import { ProblemRemindSection } from '@/app/landing/youtube/components/problem-remind-section'
import { SolutionSection } from '@/app/landing/youtube/components/solution-section'
import { CallToJoinSection } from '@/app/landing/youtube/components/call-to-join-section'
import { PricingSection } from '@/app/landing/youtube/components/pricing-section'
import { FaqSection } from '@/app/landing/youtube/components/faq-section'

export default function Page() {
    return (
        <main className={'main'}>
            <div className={'py-20 flex flex-col space-y-[240px]'}>
                <HeroSection />
                <ProblemSection />
                <ProblemRemindSection />
                <SolutionSection />
                <PricingSection />
                <CallToJoinSection />
                <FaqSection />
            </div>
        </main>
    )
}
