'use client'

import { CMSLink } from '@/components/Link'
import React from 'react'
import { Header as HeaderType } from '@/payload-types'

type HeaderNavProps = {
  header: HeaderType
  // linkIDs: string | null | undefined | (string | null | undefined)[]
}

export const HeaderNav: React.FC<HeaderNavProps> = async ({ header }) => {
  const navItems = header?.navItems || []
  // console.log('linkIDs yipee: ', linkIDs)
  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link, id }) => {
        // console.log('link: ', link)
        return <CMSLink key={id} {...link} appearance="link" />
      })}
    </nav>
  )
}
