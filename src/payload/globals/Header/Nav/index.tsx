'use client'

import { CMSLink } from '@/components/Link'
import { Link } from '@/i18n/routing'
import React from 'react'
import { Header as HeaderType } from '@/payload-types'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
    </nav>
  )
}
