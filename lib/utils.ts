import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRouteForStartPage = (lang: string) => {
  switch (lang) {
    case 'en':
      return '/'
    case 'de':
      return '/de'
    case 'es':
      return '/es'
    default:
      return '/'
  }
}