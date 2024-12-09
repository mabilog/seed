// import { setRequestLocale } from 'next-intl/server'
// import { getLocale } from 'next-intl/server'
// import { getPayload } from 'payload'
// import { Locale } from '@/locales'
// import config from '@payload-config'
// import { Fragment } from 'react'

// import { Page as PageType } from '@/payload-types'

// // export async function generateStaticParams() {
// //   // const locale = (await getLocale()) as Locale
// //   // console.log('locale', locale)
// //   const payload = await getPayload({ config })
// //   const pages = await payload.find({
// //     collection: 'pages',
// //     select: {
// //       slug: true,
// //     },
// //   })

// //   const params = pages.docs
// //     ?.filter((doc) => {
// //       return doc.slug !== 'home'
// //     })
// //     .map(({ slug }) => {
// //       return { slug }
// //     })

// //   return params
// // }

// type Props = {
//   params: Promise<{
//     locale: Locale
//     // slug?: string
//   }>
// }

// // const Homepage = async () => {
// //   const locale = (await getLocale()) as Locale

// //   setRequestLocale(locale)

// //   const payload = await getPayload({ config })

// //   const { docs: users } = await payload.find({
// //     collection: 'users',
// //     locale,
// //   })

// //   return (
// //     <div>
// //       {users.map((user) => (
// //         <Fragment key={user.id}>
// //           <h1>{user.name}</h1>
// //           <h2>{user.greetings}</h2>
// //         </Fragment>
// //       ))}
// //     </div>
// //   )
// // }

// export default Homepage

import PageTemplate from './[slug]/page'

export default PageTemplate
