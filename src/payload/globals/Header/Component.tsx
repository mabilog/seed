import type { Header } from '@/payload-types'
import HeaderClient from './Component.client'
import { getGlobal } from '@/utilities/getGlobals'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/locales'

const Header = async () => {
  const locale = (await getLocale()) as Locale
  const header: Header = await getGlobal('header', 1, locale)

  return <HeaderClient header={header} />
}

export default Header
