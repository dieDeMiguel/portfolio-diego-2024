import React from 'react'
import LanguageMenu from '../LanguageMenu'
import Container from '../Container'
import { GENERAL_CONFIG, NAVIGATION } from '@/app/config'
import Link from 'next/link'
import CookieConsentComponent from '../cookie/CookieConsentComponent'
import { type Dictionary } from '@/types'
import { LangI } from '@/app/[lang]/dictionaries'

export default function Footer({
  lang,
  dict,
}: {
  lang: LangI
  dict: Dictionary
}) {
  const conf = GENERAL_CONFIG[lang as keyof typeof GENERAL_CONFIG]

  const COMPLETE_NAVIGATION = [
    ...NAVIGATION[lang as keyof typeof NAVIGATION],
    {
      name: dict.general.accessibility,
      link: `/${lang}/accessibility-statement`,
    },
  ]

  return (
    <footer className="bg-[var(--ghost)] w-full text-center mx-auto py-8 border-t border-t-black px-8">
      <Container extraClasses="!bg-white my-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col bg-white items-start gap-2">
            <h2 className="font-bold text-2xl">{conf.titleLogo}</h2>
            <nav>
              <ul className="flex flex-col items-start">
                {COMPLETE_NAVIGATION.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  )
                })}

                <li>
                  <CookieConsentComponent lang={lang} dict={dict} />
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <LanguageMenu lang={lang} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
