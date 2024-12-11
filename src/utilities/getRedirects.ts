import config from '@payload-config'
import { getPayload } from 'payload'

export async function getRedirects(depth = 1) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'redirects',
    depth,
    limit: 0,
    pagination: false,
  })

  return docs
}
