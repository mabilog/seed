import type { Header } from '@/payload-types'
import HeaderClient from './Component.client'
import { getGlobal } from '@/utilities/getGlobals'

const Header = async () => {
  const header: Header = await getGlobal('header', 1)

  return <HeaderClient header={header} />
}

export default Header
