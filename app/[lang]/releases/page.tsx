import { Dictionary } from '@/types'
import React from 'react'
import { type LangI, getDictionary } from '../dictionaries'
import HeroReleases from '@/components/HeroReleases'
import ReleasesSection from '@/components/sections/ReleasesSection'
import { Metadata } from 'next'
import { GENERAL_CONFIG_RELEASES } from '@/app/config'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  const conf =
    GENERAL_CONFIG_RELEASES[lang as keyof typeof GENERAL_CONFIG_RELEASES]

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
  const linkToHomePath = `/${lang}`

  return (
    <>
      <HeroReleases dict={dict} />

      <ReleasesSection dict={dict} />

      <div className="mx-auto flex justify-center items-center max-6xl mb-8">
        <Link className="btn" href={linkToHomePath}>
          {dict.error404.toStart}{' '}
        </Link>
      </div>
    </>
  )
}
