'use client'

import React, { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import pluginConfig from './CookieConsentConfig'
import { Dictionary } from '@/types'
import { LangI } from '@/app/[lang]/dictionaries'

const CookieConsentComponent = ({
  dict,
  lang,
}: {
  dict: Dictionary
  lang: LangI
}) => {
  useEffect(() => {
    CookieConsent.run(pluginConfig)
  }, [])

  const openPreferences = () => {
    CookieConsent.setLanguage(lang)
    CookieConsent.showPreferences()
  }

  return (
    <button onClick={openPreferences}>{dict.command_help.optCookies}</button>
  )
}

export default CookieConsentComponent
