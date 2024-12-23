import type { Header, Page } from '@/payload-types'
import HeaderClient from './Component.client'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/locales'

import { getGlobal } from '@/utilities/getGlobals'

const Header = async () => {
  const locale = (await getLocale()) as Locale
  const header: Header = await getGlobal('header', 1, locale)

  const { navItems } = header

  const linkIDs = navItems
    ?.map(({ link }) => {
      if (link.type === 'reference' && link?.reference?.relationTo === 'pages') {
        const value = link.reference.value

        if (typeof value === 'object' && value !== null && 'id' in value) {
          return value.id
        }

        return null
      }
    })
    .filter((id): id is string => id !== null && id !== undefined)

  return <HeaderClient header={header} />
}

export default Header
