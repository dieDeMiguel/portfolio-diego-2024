'use client'
import React from 'react'
import { CommandHelper } from './CommandHelper'
import Link from 'next/link'

import { getRouteForStartPage } from '@/lib/utils'
import { GENERAL_CONFIG, NAVIGATION } from '@/app/config'
import LanguageMenu from './LanguageMenu'
import { usePathname } from 'next/navigation'
import { type Dictionary } from '@/types'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Container from './Container'
import SkipToMainContentLink from './SkipToMainContentLink'
import { LangI } from '@/app/[lang]/dictionaries'

export default function Header({
  lang,
  dict,
}: {
  lang: LangI
  dict: Dictionary
}) {
  const pathname = usePathname()
  const conf = GENERAL_CONFIG[lang as keyof typeof GENERAL_CONFIG]

  return (
    <header className="mt-6 z-30 w-full">
      <SkipToMainContentLink dict={dict} />
      <div className="px-4 xs:px-6">
        <div className="mx-auto max-w-6xl relative">
          <div className="flex items-center justify-between rounded-lg px-6 py-4 border border-black shadow-md bg-white text-black md:h-16 lg:h-16">
            <Link
              className="flex transition-transform focus:scale-105 hover:scale-105 font-bold"
              href={getRouteForStartPage(lang)}
            >
              {conf.titleLogo}
            </Link>

            <nav className="flex items-center gap-3 ">
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <button className="sm:hidden" aria-label="Open Menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3em"
                      height="1.3em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
                      />
                    </svg>
                  </button>
                </DrawerTrigger>
                <DrawerContent className="top-0 right-0 w-screen max-w-[90%] h-full py-6 bg-[var(--ghost)] overflow-hidden">
                  <div className="mx-auto w-full max-w-sm flex flex-col items-start text-left">
                    <DrawerClose asChild>
                      <button
                        className="btn absolute right-5"
                        aria-label="close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="m7 7l10 10M7 17L17 7"
                          />
                        </svg>
                      </button>
                    </DrawerClose>
                    <DrawerHeader className="text-left mt-12">
                      <DrawerTitle>{conf.titleLogo}</DrawerTitle>
                      <DrawerDescription>{conf.description}</DrawerDescription>
                    </DrawerHeader>

                    <Container extraClasses="mb-0 bg-white w-[90%] rounded-tr-none rounded-br-none -mr-1">
                      <div className="font-bold text-xl mb-5">Settings</div>

                      <LanguageMenu
                        extraClasses="bg-white rounded-md"
                        lang={lang}
                      />
                    </Container>

                    <Container extraClasses="!bg-white mt-6 w-[90%] rounded-tr-none rounded-br-none -mr-1">
                      <div className="flex flex-col justify-center gap-3">
                        <div className="font-bold text-xl mb-3">Navigation</div>

                        <ul className="flex flex-col items-left gap-1 text-sm">
                          {NAVIGATION[lang].map((item, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  href={item.link}
                                  className={
                                    pathname === item.link ? 'font-bold' : ''
                                  }
                                >
                                  {item.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </Container>
                  </div>
                </DrawerContent>
              </Drawer>

              <LanguageMenu extraClasses="hidden sm:block" lang={lang} />

              <ul className="hidden items-center gap-4 text-sm sm:flex">
                {NAVIGATION[lang].map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className={` hover:border-b-black focus:border-b-black ${
                          pathname === item.link
                            ? 'border-b-black border-b'
                            : 'border-b border-b-transparent'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="absolute right-0 -bottom-9 hidden md:block">
            <CommandHelper lang={lang} dict={dict} />
          </div>
        </div>
      </div>
    </header>
  )
}
