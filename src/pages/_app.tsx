import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import AppContext from '../context'
import { useState, useEffect } from 'react'


function MyApp(props: AppProps<{}>) {
  const { Component, pageProps } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])
  return (
    <>
      <GlobalStyles />
      <AppContext>
        {isLoading ?
          "" :
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
      </AppContext>
    </>
  )
}

export default MyApp;