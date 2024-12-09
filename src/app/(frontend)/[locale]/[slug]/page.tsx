import { getPayload } from 'payload'
import { defaultLocale, Locale } from '@/locales'
import config from '@payload-config'

import { Page as PageType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'index'
    })
    .map(({ slug }) => {
      return { slug }
    })

  console.log('params ', params)

  return 'hello'
}

type Props = {
  params: Promise<{
    locale: Locale
    slug?: string | undefined
  }>
}

const queryPageBySlug = async ({ locale, slug }: { locale: Locale; slug: string }) => {
  // console.log('locale: ', locale)
  // console.log('slug: ', slug)

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

  // console.log('result.docs?.[0]: ', result.docs?.[0])
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

  // console.log('page: ', page)

  return (
    <div>
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

export default Page
