import { Media } from '@/payload-types'
import React from 'react'

type TwoColumnsProps = {
  heading?: string | null
  text?: string | null
  image?: string | Media | null
  direction: string
}

const TwoColumnsBlock = ({ heading, text, image, direction }: TwoColumnsProps) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TwoColumnsBlock
