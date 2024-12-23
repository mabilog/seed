import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import React, { ReactNode } from 'react'
import { getLocale } from 'next-intl/server'
import { ThemeProvider } from '@/components/ThemeProvider'

import './globals.css'
import Header from '@/payload/globals/Header/Component'

interface Props {
  children: ReactNode
}

const RootLayout: React.FC<Props> = async ({ children }: Props) => {
  const locale = await getLocale()
  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} timeZone="America/New_York" now={new Date()}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
