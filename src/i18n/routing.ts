import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales } from '@/locales'

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  pathnames: {
    '[slug]': {
      en: '/[slug]',
      fr: '/[slug]',
    },
  },
  alternateLinks: false,
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation()
