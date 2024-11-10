'use client'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageMenu({
  lang,
  extraClasses,
}: {
  lang: string
  extraClasses?: string
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [selectedLang, setSelectedLang] = React.useState(lang)
  const [isOpenLanguageMenu, setIsOpenLanguageMenu] = React.useState(false)

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang)
    setIsOpenLanguageMenu(false)

    const pathnameWithoutLang = pathname.replace(`/${selectedLang}`, '')
    // router.replace(`/${lang}/${pathnameWithoutLang}`)
    router.push(`/${lang}/${pathnameWithoutLang}`)

    // setTimeout(() => {
    //   window.location.reload()
    // }, 1000)
  }

  const rightNameOfLang = (lang: string) => {
    switch (lang) {
      case 'es':
        return 'Español'
      case 'en':
        return 'English'
      case 'de':
        return 'Deutsch'
      default:
        return 'English'
    }
  }

  return (
    <div className={extraClasses}>
      <Popover open={isOpenLanguageMenu} onOpenChange={setIsOpenLanguageMenu}>
        <PopoverTrigger className="border border-black rounded-md flex gap-1 items-center pr-3 pl-2 py-1 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7l4-9l4 9m-.9-2h-6.2" />
            </g>
          </svg>{' '}
          {rightNameOfLang(selectedLang)}
        </PopoverTrigger>
        <PopoverContent className="border border-black">
          <nav className="flex flex-col text-start items-start">
            <button
              className="hover:bg-[var(--ghost)] w-full text-start p-1 text-sm"
              onClick={() => handleLangChange('es')}
            >
              Español
            </button>
            <button
              className="hover:bg-[var(--ghost)] w-full text-start p-1 text-sm"
              onClick={() => handleLangChange('en')}
            >
              English
            </button>
            <button
              className="hover:bg-[var(--ghost)] w-full text-start p-1 text-sm"
              onClick={() => handleLangChange('de')}
            >
              Deutsch
            </button>
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  )
}
