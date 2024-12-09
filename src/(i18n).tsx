// import { getPayloadHMR } from '@payloadcms/next/utilities'
// import { cache } from 'react'
// import config from '@payload-config'
// import { getRequestConfig } from 'next-intl/server'
// import { locales } from './locales'
// import { notFound } from 'next/navigation'

// const getTranslations = cache(async (locale: string) => {
//   const payload = await getPayloadHMR({ config })
//   console.log('payload: ', payload)
// })

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as any)) notFound()

//   const translation = await getTranslations(locale)
//   return { messages: 'hello' }
// })
