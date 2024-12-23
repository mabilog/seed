import { Hero } from '@/blocks/Hero/config'
import { TwoColumns } from '@/blocks/TwoColumns/config'
import { Blocks } from '@/blocks/Blocks'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TwoColumns],
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
