import createMiddleware from 'next-intl/middleware'
import { locales } from './locales'

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: 'always',
})

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    // '/((?!api|_next|_vercel|admin|.*\\..*).*)',
    '/',
    '/(en|fr)/:path*',
  ],
}
