import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      localized: true,
      label: {
        en: 'Name',
        fr: 'Nom',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'greetings',
      label: {
        en: 'Greetings',
        fr: 'Salutations',
      },
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
