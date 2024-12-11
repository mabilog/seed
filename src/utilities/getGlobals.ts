import { Locale } from '@/locales'
import type { Config } from '@/payload-types'

import config from '@payload-config'
import { getPayload } from 'payload'

type Global = keyof Config['globals']

export async function getGlobal(slug: Global, depth = 0, locale: Locale) {
  const payload = await getPayload({ config })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  })

  return global
}
