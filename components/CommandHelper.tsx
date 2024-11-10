'use client'

import * as React from 'react'
import { CookieIcon, LayoutTemplate, Star } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Dictionary } from '@/types'
import { showPreferences, setLanguage } from 'vanilla-cookieconsent'
import { LangI } from '@/app/[lang]/dictionaries'

export function CommandHelper({
  lang,
  dict,
}: {
  lang: LangI
  dict: Dictionary
}) {
  const [open, setOpen] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      <p className="text-sm text-zinc-800 hidden md:block">
        {dict.help.title}{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-zinc-800 opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={dict.command_help.searchPlaceholder} />
        <CommandList>
          <CommandEmpty>{dict.command_help.noResults}</CommandEmpty>
          <CommandGroup heading={dict.command_help.settings}>
            <CommandItem
              onSelect={() => {
                setOpen(false)
                setLanguage(lang)
                showPreferences()
              }}
            >
              <CookieIcon />
              <span>{dict.command_help.optCookies}</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading={dict.command_help.suggestions}>
            <CommandItem
              onSelect={window.open.bind(
                window,
                'https://manusansan.gumroad.com/l/template-retro-landing-astro',
                '_blank'
              )}
            >
              <LayoutTemplate />
              <span>{dict.command_help.optTemplate}</span>
            </CommandItem>
            <CommandItem
              // open https://manuelsanchezdev.com on new tab
              onSelect={window.open.bind(
                window,
                'https://manuelsanchezdev.com',
                '_blank'
              )}
            >
              <Star />
              <span>{dict.command_help.optAuthor}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}
