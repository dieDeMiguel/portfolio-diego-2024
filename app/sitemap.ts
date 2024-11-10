import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2024-11-07'

  return [
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/es/',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/en/',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/de/',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/es/contact',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/en/contact',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/de/contact',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/es/releases',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/en/releases',
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: 'https://template-landing-nextjs-i18n.vercel.app/de/releases',
      changeFrequency: 'monthly',
      lastModified,
    },
  ]
}
