'use client'

import { type Dictionary } from '@/types'
import Image from 'next/image'
import React, { useId, useState } from 'react'
import newsletterImage from '../../public/assets/mobile-vertical.png'
import { useNewsletter, RESULTS } from '@/hooks/use-newsletter'
import { NewsletterButton } from '../NewsletterButton'

function NewsletterSection({ dict }: { dict: Dictionary }) {
  const realEndpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT
  const [isChecked, setIsChecked] = useState(false)

  const { result, register } = useNewsletter({ endpoint: realEndpoint! })

  const id = useId()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // get email from formData from event
    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get('email')
    if (typeof email !== 'string') return
    register({ email })
  }

  const getButtonClasses = () => {
    if (result === RESULTS.LOADING) return 'border-black'
    if (result === RESULTS.SUCCESS) return 'border-green-500 !text-green-500'
    if (result === RESULTS.ALREADY_SUBSCRIBED)
      return 'border-blue-500 !text-blue-500'
    if (result === RESULTS.ERROR) return 'border-red-500 !text-red-500'
    return 'border-black'
  }

  const getButtonLiteral = () => {
    if (result === RESULTS.LOADING) return dict.newsletter.ctaLoading
    if (result === RESULTS.SUCCESS) return dict.newsletter.ctaSuccess
    if (result === RESULTS.ALREADY_SUBSCRIBED) return dict.newsletter.ctaAlready
    if (result === RESULTS.ERROR) return dict.newsletter.ctaError
    return dict.newsletter.ctaIdle
  }

  return (
    <section
      className="w-full shadow-md border-t border-t-black"
      aria-label="Newsletter Section"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto h-full">
        {/* // image section  */}
        <div className="max-w-full md:max-w-[400px] bg-[var(--acid)] h-full flex flex-col items-center justify-center border-b border-b-black md:border-b-transparent md:border-l md:border-r border-r-black border-l-black p-12">
          <Image
            priority
            src={newsletterImage}
            width={500}
            height={500}
            alt="mobile frame with the homepage of the app"
          />
        </div>

        {/* text section  */}
        <div className="bg-white flex-1 p-8 flex flex-col justify-center md:border-r border-r-black">
          <div className="md:max-w-[80%] flex flex-col gap-2">
            <h2 className="font-bold text-3xl md:text-5xl text-balance">
              {dict.newsletter.title}
            </h2>
            <p>{dict.newsletter.subtitle}</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row items-start gap-4 mt-4"
            >
              <div className="flex flex-col gap-2">
                <input
                  required
                  className="border border-black rounded-2xl px-3 py-1"
                  id={id}
                  autoComplete="email"
                  name="email"
                  type="email"
                  placeholder="maxmustermann@gmx.de"
                />
                {/* Consent Checkbox */}
                <label className="flex items-center gap-2 text-sm mt-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    required
                    className="accent-[var(--acid)] flex"
                    aria-required="true"
                  />
                  <span className="text-xs">{dict.newsletter.terms}</span>
                </label>
              </div>

              <NewsletterButton
                className={`transition-all text-sm flex items-center gap-2 rounded-2xl border disabled:opacity-40 ${getButtonClasses()} `}
                disabled={result !== RESULTS.IDLE || !isChecked}
                loading={result === RESULTS.LOADING}
                type="submit"
                arrow={result === RESULTS.IDLE}
              >
                {getButtonLiteral()}
              </NewsletterButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
