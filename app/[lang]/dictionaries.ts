import 'server-only'

const dictionaries = {
  en: () =>
    import('../../dictionaries/en.json').then((module) => module.default),
  de: () =>
    import('../../dictionaries/de.json').then((module) => module.default),
  es: () =>
    import('../../dictionaries/es.json').then((module) => module.default),
}

export type LangI = keyof typeof dictionaries

export const getDictionary = async (locale: LangI) => dictionaries[locale]()
