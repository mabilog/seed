import { getPayload } from 'payload'
import { defaultLocale, Locale } from '@/locales'
import config from '@payload-config'

import { Page as PageType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Props = {
  params: Promise<{
    locale: Locale
    slug?: string | undefined
  }>
}

const queryPageBySlug = async ({ locale, slug }: { locale: Locale; slug: string }) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
    locale,
  })

  return result.docs?.[0] || null
}

const Page = async ({ params: paramsPromise }: Props) => {
  let { locale, slug } = await paramsPromise

  if (!slug) {
    slug = 'index'
  }

  if (!locale) {
    locale = defaultLocale
  }

  let page: PageType | null
  page = await queryPageBySlug({ locale, slug })

  if (!page) {
    return (
      <div>
        <h1>404 not found</h1>
      </div>
    )
  }

  return (
    <div>
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

export default Page
