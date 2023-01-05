import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Home from './home';
import GlobalStyles from '../styles/GlobalStyles';
import { getTweets } from '../api/SolanaWeb3';

function App() {
  console.log('App.tsx got here');
  console.log(getTweets());
  return (
    <>
    <Home/>  
    </>
  );
}

export default App;
