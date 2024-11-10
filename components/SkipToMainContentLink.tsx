'use client'

import { Dictionary } from '@/types'
import { useReducedMotion } from 'framer-motion'
import React, { useEffect } from 'react'

type FocusableElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

const SkipToMainContentLink = ({ dict }: { dict: Dictionary }) => {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const skipToContentLink = document.querySelector(
      '.skip-to-link'
    ) as HTMLAnchorElement
    const mainContent = document.querySelector('#main-content') as HTMLElement

    const handleSkipToContent = (event: MouseEvent | KeyboardEvent) => {
      event.preventDefault()

      const firstFocusableElement = mainContent?.querySelector(
        'button, a, input, select, textarea'
      ) as FocusableElement | null

      if (firstFocusableElement) {
        firstFocusableElement.focus()
        firstFocusableElement.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        })
      } else {
        mainContent.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        })
      }
    }

    skipToContentLink?.addEventListener('click', (event) =>
      handleSkipToContent(event)
    )

    return () => {
      skipToContentLink?.removeEventListener('click', (event) =>
        handleSkipToContent(event)
      )
    }
  }, [shouldReduceMotion])

  return (
    <a
      className="skip-to-link transition no-underline left-0 bg-[var(--acid)] absolute px-4 py-2 text-center m-xs -translate-y-16 focus:no-underline hover:no-underline focus:translate-y-0 z-[3000]"
      href="#main-content"
    >
      {dict.general.skipToMainContent}
    </a>
  )
}

export default SkipToMainContentLink
