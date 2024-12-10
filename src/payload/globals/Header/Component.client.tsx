'use client'
import React from 'react'

import type { Header } from '@/payload-types'
import { Link, usePathname } from '@/i18n/routing'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  header: Header
}

const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between">
        <Link href="/">Home</Link>
        <HeaderNav header={header} />
      </div>
    </header>
  )
}

export default HeaderClient
