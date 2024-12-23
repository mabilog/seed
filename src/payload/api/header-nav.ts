import config from '@payload-config'
import { getPayload } from 'payload'

export default async function getNav(id: string) {
  const payload = await getPayload({ config })

  const result = await payload.findByID({
    collection: 'pages',
    id,
    select: {
      slug: true,
    },
    locale: 'all',
  })
}
