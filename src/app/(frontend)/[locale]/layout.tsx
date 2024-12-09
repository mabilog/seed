import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import React, { ReactNode } from 'react'
import { getLocale } from 'next-intl/server'
import LocaleSwitcher from '@/component/LocalsSwitcher'

interface Props {
  children: ReactNode
}

const RootLayout: React.FC<Props> = async ({ children }: Props) => {
  // const { locale } = await params
  // const messages = await getMessages()

  const locale = await getLocale()
  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} timeZone="America/New_York" now={new Date()}>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
