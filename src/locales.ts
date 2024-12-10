export const locales = ['en', 'fr'] as const
export const defaultLocale = 'en'

export type Locale = (typeof locales)[number]

export const localesData = {
  en: {
    value: 'en',
    dir: 'ltr',
    label: '🇺🇸',
    abbreviation: 'EN',
    countryCode: 'US',
  },
  fr: {
    value: 'fr',
    dir: 'ltr',
    label: '🇫🇷',
    abbreviation: 'FR',
    countryCode: 'FR',
  },
}
