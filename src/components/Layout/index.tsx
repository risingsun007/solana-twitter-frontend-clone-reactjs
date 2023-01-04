import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';
import Head from 'next/head'

import { Container, Wrapper } from './styles';

export interface LayoutProps {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
    <Head>
        <title>Solana Twitter</title>
        <meta name="description" content="Solana Twitter" />
        <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <Container>
      <Wrapper>
        <MenuBar />
       {props.children}
        <SideBar />
      </Wrapper>
    </Container>
    </>
  );
};

export default Layout;
