import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'de', 'es']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  let headers = { 'accept-language': 'en-US,en;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
  let locales = ['en', 'de', 'es']
  let defaultLocale = 'en'

  // console.log("getLocale", languages, locales, defaultLocale)

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl

  // Check if the request is for an asset
  const isAssetRequest =
    pathname.startsWith('/assets/') ||
    /\.(png|jpg|jpeg|svg|gif|css|js|ico|webp|woff|woff2|ttf|eot)$/.test(
      pathname
    )
  const isApiRequest = pathname.startsWith('/api/')
  // If the request is for an asset, skip locale prefixing
  if (isAssetRequest || isApiRequest) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
