import React, { Fragment } from 'react'
import { Page } from '@/payload-types'

import HeroBlock from '@/blocks/Hero/Component'
import TwoColumnBlock from '@/blocks/TwoColumns/Component'

const blockComponents = {
  hero: HeroBlock,
  twoColumns: TwoColumnBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }
  return null
}
