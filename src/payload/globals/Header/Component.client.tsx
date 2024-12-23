'use client'
import React from 'react'

import type { Header } from '@/payload-types'
import { Link } from '@/i18n/routing'
import { HeaderNav } from './Nav'
import LocaleSwitcher from '@/components/LocaleSwitcher'

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
      </div>
    </header>
  )
}

export default HeaderClient
