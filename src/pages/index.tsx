import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import { getTweets } from '../api/SolanaWeb3';

function App() {
  console.log('App.tsx got here');
  console.log(getTweets());
  return (
    <>
    <Head>
        <title>Solana Twitter</title>
        <meta name="description" content="Solana Twitter" />
    </Head>
      <GlobalStyles />
      <Layout />
    
      
    </>
  );
}

export default App;
