import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import AppContext from '../context'


function MyApp(props: AppProps<{}>) {
    const { Component, pageProps } = props  
    
    return(
      <>
      <GlobalStyles />
      <AppContext>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </AppContext>
      </>
    )
}

export default MyApp;