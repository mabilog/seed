import React from 'react'

import type { Header } from '@/payload-types'
import { Link } from '@/i18n/routing'
import { HeaderNav } from './Nav'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { ThemeToggle } from '@/components/ThemeToggle'
interface HeaderClientProps {
  header: Header
}

const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between">
        <Link href="/">Home</Link>
        <HeaderNav header={header} />
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default HeaderClient
