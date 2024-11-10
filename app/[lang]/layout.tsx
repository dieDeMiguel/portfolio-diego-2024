import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.css'
import Header from '@/components/Header'
import { type Dictionary } from '@/types'
import { MotionConfig } from 'framer-motion'
import Footer from '@/components/sections/Footer'
import { GENERAL_CONFIG } from '../config'
import { Analytics } from '@vercel/analytics/react'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { getDictionary, LangI } from './dictionaries'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  const conf = GENERAL_CONFIG[lang as keyof typeof GENERAL_CONFIG]

  return {
    title: conf.title,
    description: conf.description,
    keywords: conf.keywords,
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: LangI }>
}>) {
  const { lang } = await params

  const dict: Dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid-header-main-footer`}
      >
        <Header dict={dict} lang={lang} />

        <MotionConfig reducedMotion="user">
          <main id="main-content">{children}</main>
        </MotionConfig>

        <Footer dict={dict} lang={lang} />

        <Analytics />
      </body>
    </html>
  )
}
