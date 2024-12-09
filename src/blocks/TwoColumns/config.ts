import { Block } from 'payload'

export const TwoColumns: Block = {
  slug: 'twoColumns',
  labels: {
    singular: {
      en: 'Two Columns Block',
      fr: 'Bloc à deux colonnes',
    },
    plural: {
      en: 'Two Columns Blocks',
      fr: 'Blocs à deux colonnes',
    },
  },
  fields: [
    {
      name: 'heading',
      label: {
        en: 'Heading',
        fr: 'Titre',
      },
      type: 'text',
      localized: true,
    },
    {
      name: 'text',
      label: {
        en: 'Text',
        fr: 'Texte',
      },
      type: 'textarea',
      localized: true,
    },
    {
      name: 'image',
      label: {
        en: 'Image',
        fr: 'Image',
      },
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'direction',
      label: {
        en: 'Direction',
        fr: 'Direction',
      },
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: {
            en: 'Default',
            fr: 'Défaut',
          },
          value: 'default',
        },
        {
          label: {
            en: 'Reverse',
            fr: 'Inverse',
          },
          value: 'reverse',
        },
      ],
    },
  ],
}
