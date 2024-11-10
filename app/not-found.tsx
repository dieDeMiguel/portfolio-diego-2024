import './globals.css'
import localFont from 'next/font/local'
import Section404 from '@/components/sections/404Section'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default async function NotFound() {
  return (
    <html lang={'en'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid-header-main-footer`}
      >
        <Section404 />
      </body>
    </html>
  )
}
