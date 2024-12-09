export const locales = ['en', 'fr'] as const
export const defaultLocale = 'en'

export type Locale = (typeof locales)[number]

export const localesData = {
  en: {
    value: 'en',
    dir: 'ltr',
    label: 'English',
    abbreviation: 'EN',
    countryCode: 'US',
  },
  fr: {
    value: 'fr',
    dir: 'ltr',
    label: 'Francais',
    abbreviation: 'FR',
    countryCode: 'FR',
  },
}
