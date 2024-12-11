'use client'

import React, { ChangeEvent, startTransition, useTransition } from 'react'
import { Locale, localesData } from '@/locales'
import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const localeActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label>
      <select defaultValue={localeActive} onChange={onSelectChange}>
        {Object.keys(localesData).map((locale) => {
          const { value, label } = localesData[locale as Locale]
          return (
            <option value={value} key={value}>
              {label}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default LocaleSwitcher
