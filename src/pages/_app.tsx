import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp(props: AppProps<{}>) {
    const { Component, pageProps } = props  
    return(
      <>
     <GlobalStyles />
     <Layout>
     <Component {...pageProps} />
     </Layout>
     </>
    )
}

export default MyApp;