import React from 'react'
import FAQQuestions from '../FAQQuestions'
import { QuestionI } from '@/types'

const FAQSection = ({ questions, title }: {
  questions: QuestionI[]
  title: string
}) => {
  // Schema directly included in the JSX (for better SEO)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((faq: QuestionI) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section aria-label="FAQ section" className="pb-12 bg-white border-t border-black">
      <div className='mx-auto max-w-4xl py-12 px-5'>
        {title ? (
          <h2 className="mb-12 text-2xl md:text-4xl font-bold text-center">{title}</h2>
        ) : (
          null
        )}

        <FAQQuestions questions={questions} />

      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  )
}

export default FAQSection
