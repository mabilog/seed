import config from '@payload-config'
import { getPayload } from 'payload'

export async function findBySlug(slug: any) {
  if (typeof slug !== 'string') return 'not a string?'

  const payload = await getPayload({ config })

  const item = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    locale: 'all',
  })

  console.log(item)
  return item.docs[0]
}
