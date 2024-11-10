'use client'

import { acceptCategory, acceptedCategory } from 'vanilla-cookieconsent'
import { useEffect, useState } from 'react'
import { type Dictionary } from '@/types'

interface CookieConsentChangeEvent extends Event {
  detail: {
    cookie: {
      categories: string[]
    }
  }
}

function YouTubeVideo({
  videoId,
  dict,
}: {
  videoId: string
  dict: Dictionary
}) {
  const [isConsentGiven, setIsConsentGiven] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false) // Controls when the component should load
  const noCookieUrl = `https://www.youtube-nocookie.com/embed/${videoId}`

  // Delay loading of the component
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 500) // Adjust delay as needed (3000 ms = 3 seconds)

    return () => clearTimeout(timer)
  }, [])

  // Check initial consent and listen for changes only after the component should load
  useEffect(() => {
    if (!shouldLoad) return // Exit if component should not yet load

    // Set initial consent state for YouTube
    setIsConsentGiven(acceptedCategory('youtube'))

    // Event listener for consent changes
    const handleConsentChange = (event: Event) => {
      const customEvent = event as CookieConsentChangeEvent
      const { detail } = customEvent

      if (detail.cookie.categories.includes('youtube')) {
        setIsConsentGiven(true)
      } else {
        setIsConsentGiven(false)
      }
    }

    // Listen for the custom 'cookieconsent.changed' event
    window.addEventListener('cc:onChange', handleConsentChange)
    window.addEventListener('cc:onConsent', handleConsentChange)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('cc:onChange', handleConsentChange)
      window.removeEventListener('cc:onConsent', handleConsentChange)
    }
  }, [shouldLoad])

  if (!shouldLoad || !isConsentGiven) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl max-h-[200px] flex flex-col gap-4 items-start w-full">
        <p className="text-left sm:text-xl text-sm max-w-[400px]">
          {dict.youtube.text}
        </p>
        <button className="btn" onClick={() => acceptCategory('youtube')}>
          {dict.youtube.cta}
        </button>
        <div className="absolute right-0 md:-translate-y-1/2 md:top-1/2 -bottom-2 md:bottom-auto opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-24 md:size-72 text-[var(--acid)] opacity-95 -rotate-3"
          >
            <g fill="none" fillRule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
              />
              <path
                strokeWidth={0.1}
                stroke="black"
                d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }
  return (
    <div className="my-12 w-full" aria-live="polite">
      <iframe
        width="560"
        height="315"
        src={noCookieUrl}
        title="YouTube video player"
        className="w-full aspect-video h-auto border border-black rounded-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default YouTubeVideo
