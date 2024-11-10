import { Dictionary } from '@/types'
import React from 'react'
import { type LangI, getDictionary } from '../dictionaries'
import ContactSection from '@/components/sections/ContactSection'
import { Metadata } from 'next'
import { GENERAL_CONFIG_CONTACT } from '@/app/config'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  const conf =
    GENERAL_CONFIG_CONTACT[lang as keyof typeof GENERAL_CONFIG_CONTACT]

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
      <ContactSection dict={dict} />
    </>
  )
}
