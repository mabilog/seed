import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: {
      en: 'Hero Block',
      fr: 'Bloc Héros',
    },
    plural: {
      en: 'Hero Blocks',
      fr: 'Blocs Héros',
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
      required: true,
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
      name: 'backgroundImage',
      label: {
        en: 'Background Image',
        fr: "Image d'arrière-plan",
      },
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
