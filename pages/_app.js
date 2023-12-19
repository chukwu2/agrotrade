import '@/styles/globals.css'
import Layout from '@/components/layouts'
import { AppProvider } from '@/config/globals'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps:{session,...pageProps}}) {
  return (
      <SessionProvider session={session}>
          <AppProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </AppProvider>
      </SessionProvider>


  )
}
