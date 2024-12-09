import { buildCachedPayload } from '@payload-enchants/cached-local-api'

export const { cachedPayloadPlugin, getCachedPayload } = buildCachedPayload({
  collections: [
    {
      slug: 'users',
    },
    {
      slug: 'media',
    },
  ],
  unstable_cache,
})
