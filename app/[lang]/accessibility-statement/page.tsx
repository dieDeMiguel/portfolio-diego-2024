import { Dictionary } from '@/types'
import React from 'react'
import { type LangI, getDictionary } from '../dictionaries'
import { Metadata } from 'next'
import { GENERAL_CONFIG_ACCESSIBILITY_STATEMENT } from '@/app/config'
import Container from '@/components/Container'
import BlockRenderer from '@/components/BlockRenderer'
import { CONTENT } from '@/content/accessibility-statement'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  const conf =
    GENERAL_CONFIG_ACCESSIBILITY_STATEMENT[
      lang as keyof typeof GENERAL_CONFIG_ACCESSIBILITY_STATEMENT
    ]

  return {
    title: conf.title,
    description: conf.description,
    keywords: conf.keywords,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: LangI }>
}) {
  const { lang } = await params
  const dict: Dictionary = await getDictionary(lang)

  return (
    <>
      <section
        className="w-full min-h-screen py-24"
        aria-label="Accessibility Statement Section"
      >
        <div className="mx-auto w-full max-w-4xl px-5 md:px-0">
          <Container extraClasses="bg-white">
            <h2 className="font-bold text-2xl md:text-4xl text-center mb-12">
              {dict.general.accessibilityStatement}
            </h2>

            <BlockRenderer blocks={CONTENT[lang]} />
          </Container>
        </div>
      </section>
    </>
  )
}
