'use client'

import { type Dictionary } from '@/types'
import React from 'react'
import YouTubeVideo from '../YouTubeVideo'
import Container from '../Container'

function YouTubeVideoSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[var(--ghost)] w-full shadow-sm border-t border-t-black">
      <div className="max-w-6xl bg-[var(--acid)] md:border-l md:border-r border-black mx-auto px-8 py-12 md:py-24 text-center flex flex-col items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold">
            {dict.youtube.title}
          </h2>
          <p className="prose text-center">{dict.youtube.subtitle}</p>
        </div>

        <Container extraClasses="bg-white w-full">
          <YouTubeVideo dict={dict} videoId="dQw4w9WgXcQ" />
        </Container>
      </div>
    </section>
  )
}

export default YouTubeVideoSection
