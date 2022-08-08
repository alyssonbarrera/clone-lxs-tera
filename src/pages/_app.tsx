import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

import NProgress from 'nprogress'
import theme from '../styles/theme'
import '../styles/globals.css'
import "../styles/nprogress.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  router?.events?.on('routeChangeStart', () => {
    NProgress.start()
  })
  router?.events?.on('routeChangeComplete', () => {
    NProgress.done()
  })

  const CustomLayout = (Component as any).layout ? (Component as any).layout : React.Fragment

  return (
    <NextAuthProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <CustomLayout>
            <Head>
              <title>Clone LXS - Tera</title>
            </Head>
            <Component {...pageProps} />
          </CustomLayout>
        </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp