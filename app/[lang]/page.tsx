import { type Dictionary } from '@/types'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CompaniesSection from '@/components/sections/CompaniesSection'
import StepSection from '@/components/sections/StepSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import FAQSection from '@/components/sections/FAQSection'
import YouTubeVideoSection from '@/components/sections/YouTubeVideoSection'
import { getDictionary, type LangI } from './dictionaries'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: LangI }>
}) {
  const { lang } = await params
  const dict: Dictionary = await getDictionary(lang)

  return (
    <>
      <Hero dict={dict} />
      <FeaturesSection dict={dict} />
      <CompaniesSection dict={dict} />
      <StepSection dict={dict} />
      <YouTubeVideoSection dict={dict} />
      <NewsletterSection dict={dict} />
      <FAQSection
        title={dict.faq_landing.title}
        questions={dict.faq_landing.questions}
      />
    </>
  )
}
