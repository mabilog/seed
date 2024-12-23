import { CMSLink } from '@/components/Link'
import React from 'react'
import { Header as HeaderType } from '@/payload-types'

type HeaderNavProps = {
  header: HeaderType
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ header }) => {
  const navItems = header?.navItems || []
  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link, id }) => {
        return <CMSLink key={id} {...link} appearance="link" />
      })}
    </nav>
  )
}
