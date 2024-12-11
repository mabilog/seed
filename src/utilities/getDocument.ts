import config from '@payload-config'
import { Config } from '@/payload-types'
import { getPayload } from 'payload'

type Collection = keyof Config['collections']

export async function getDocument(collection: Collection, slug: string, depth = 0) {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection,
    depth,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return page.docs[0]
}
