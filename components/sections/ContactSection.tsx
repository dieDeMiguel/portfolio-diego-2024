'use client'
import { useForm, ValidationError } from '@formspree/react'
import React, { useState } from 'react'
import Container from '../Container'
import { Dictionary } from '@/types'

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!)
  const [isConsentChecked, setIsConsentChecked] = useState(false)

  const getRightTitle = (formState: string) => {
    if (formState === 'submitting') return dict.contact.ctaLoading
    if (formState === 'succeeded') return dict.contact.ctaSuccess
    return dict.contact.ctaIdle
  }

  return (
    <section className="w-full min-h-screen py-24" aria-label="Contact Section">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-0">
        <Container extraClasses="bg-white">
          <h2 className="font-bold text-2xl md:text-4xl text-center mb-12">
            {dict.contact.title}
          </h2>
          {formState.succeeded ? (
            <Container extraClasses="bg-white w-fit">
              <p className="text-center">{dict.contact.thankYou}</p>
            </Container>
          ) : (
            <form
              className="flex flex-col items-center max-w-xl mx-auto"
              onSubmit={submit}
            >
              <Container extraClasses="w-full flex flex-col md:flex-row gap-5 !mb-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="name">
                      {dict.contact.inputName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="border text-xs border-black rounded-2xl p-3"
                      placeholder={dict.contact.placeholderName}
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={formState.errors}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="email">
                      {dict.contact.inputEmail}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="border text-xs border-black rounded-2xl p-3"
                      placeholder={dict.contact.placeholderEmail}
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={formState.errors}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-bold" htmlFor="message">
                    {dict.contact.inputMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="min-w-[270px] border text-xs border-black rounded-2xl p-3 h-full resize"
                    placeholder={dict.contact.placeholderMessage}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={formState.errors}
                  />
                </div>
              </Container>

              <Container extraClasses="w-full !p-3 !my-0">
                {/* Consent Checkbox */}
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="acceptationTrue"
                    checked={isConsentChecked}
                    onChange={(e) => setIsConsentChecked(e.target.checked)}
                    required
                    className="accent-[var(--acid)]"
                  />
                  <span>{dict.contact.consent}</span>
                </label>
              </Container>

              <button
                className="btn my-12 disabled:opacity-60"
                type="submit"
                disabled={formState.submitting || !isConsentChecked}
              >
                {getRightTitle(
                  formState.submitting
                    ? 'submitting'
                    : formState.succeeded
                    ? 'succeeded'
                    : 'idle'
                )}
              </button>
            </form>
          )}
        </Container>
      </div>
    </section>
  )
}
