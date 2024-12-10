import deepMerge from '@/utilities/deepMerge'
import { Field } from 'payload'

export type LinkAppearances = 'default' | 'outline'

export const appearanceOptions: Record<
  LinkAppearances,
  { label: { en: string; fr: string }; value: string }
> = {
  default: {
    label: {
      en: 'Default',
      fr: 'Défaut',
    },
    value: 'default',
  },
  outline: {
    label: {
      en: 'Outline',
      fr: 'Contour',
    },
    value: 'outline',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  overrides?: Record<string, unknown>
}) => Field

export const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: {
                  en: 'Internal link',
                  fr: 'Lien interne',
                },
                value: 'reference',
              },
              {
                label: {
                  en: 'Custom URL',
                  fr: 'URL personnalisée',
                },
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: {
              en: 'Open in new tab',
              fr: 'Ouvrir dans un nouvel onglet',
            },
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: {
        en: 'Document to link to',
        fr: 'Document à lier',
      },
      relationTo: ['pages'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: {
        en: 'Custom URL',
        fr: 'URL personnalisée',
      },
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkTypes,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: true,
          localized: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline]

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      admin: {
        description: {
          en: 'Choose how the link should be rendered.',
          fr: 'Choisissez comment le lien doit être rendu.',
        },
      },
      defaultValue: 'default',
      options: appearanceOptionsToUse,
    })
  }

  return deepMerge(linkResult, overrides)
}
