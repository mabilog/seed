import { getPayload } from 'payload'
import { defaultLocale, Locale } from '@/locales'
import config from '@payload-config'

import { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { Metadata } from 'next'
import { getServerSideURL } from '@/utilities/getURL'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    locale: Locale
    slug?: string | undefined
  }>
}

interface LocalizedSlug {
  id: string
  slug: {
    [key: string]: string
  }
}

const payload = await getPayload({ config })

function generateAlternateUrls(result: LocalizedSlug) {
  if (!result?.slug) {
    return {}
  }

  const baseUrl = getServerSideURL()
  const languages: { [key: string]: string } = {}

  // Generate alternate URLs for each locale
  for (const [locale, slug] of Object.entries(result.slug)) {
    languages[locale] = `${baseUrl}/${locale}/${slug}`
  }

  // Set canonical to the current locale's URL
  const canonical = languages['en'] // Or whichever locale you prefer as canonical

  return {
    alternates: {
      languages,
      canonical,
    },
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { locale, slug } = await params

  // const payload = await getPayload({ config })

  const pageID = await payload
    .find({
      collection: 'pages',
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
      locale: 'en',
      select: {},
      disableErrors: true,
    })
    .then(({ docs }) => {
      // console.log('docs: ', docs)
      return docs?.[0]?.id
    })

  if (!pageID) {
    notFound()
  }

  const result = await payload.findByID({
    collection: 'pages',
    id: pageID,
    select: {
      slug: true,
    },
    locale: 'all',
    disableErrors: true,
  })

  const slugs = result?.slug as unknown as LocalizedSlug

  if (!slugs) {
    notFound()
  }

  // note: type check
  const { alternates } = generateAlternateUrls(slugs)

  return {
    alternates,
  }
}

const queryPageBySlug = async ({ locale, slug }: { locale: Locale; slug: string }) => {
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
  const url = '/' + slug

  if (!slug) {
    slug = 'index'
  }

  if (!locale) {
    locale = defaultLocale
  }

  let page: PageType | null
  page = await queryPageBySlug({ locale, slug })

  if (!page) {
    // return <PayloadRedirects url={url} />
    return (
      <div>
        <h1>404 page not found</h1>
      </div>
    )
  }

  return (
    <div>
      <PayloadRedirects disableNotFound url={url} />
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

export default Page
