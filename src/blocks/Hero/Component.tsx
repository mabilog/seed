import { Media } from '@/payload-types'
import React from 'react'

type HeroProps = {
  heading: string | null
  text?: string | null
  backgroundImage?: string | Media | null
}

const HeroBlock = ({ heading, text, backgroundImage }: HeroProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-500">{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default HeroBlock
