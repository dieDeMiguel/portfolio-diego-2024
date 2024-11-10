'use client'

import Container from '../Container'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dictionary } from '@/types'
import Link from 'next/link'

function Section404() {
  const [isClient, setIsClient] = useState(false)
  const [dict, setDict] = useState<Dictionary>({})
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const linkToHomePath = `/${locale}`

  useEffect(() => {
    const fetchDict = async () => {
      document.documentElement.lang = locale
      const dict = await import(`../../dictionaries/${locale}.json`)
      setDict(dict)

      setIsClient(true)
    }
    fetchDict()
  }, [locale])

  if (!isClient) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: dict.error404.title,
    description: dict.error404.description,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `template-landing-nextjs-i18n.vercel.app/${locale}`,
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="px-5 min-h-screen flex flex-col items-center justify-center">
        <Container extraClasses="bg-white flex flex-col items-center text-center text-balance gap-12">
          <h1 className="text-4xl font-bold">{dict.error404.title}</h1>
          <p
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: dict.error404.description }}
          />

          <p>{dict.error404.moreInfo}</p>

          <Link className="btn" href={linkToHomePath}>
            {dict.error404.toStart}{' '}
          </Link>
        </Container>
      </main>
    </>
  )
}
export default Section404
