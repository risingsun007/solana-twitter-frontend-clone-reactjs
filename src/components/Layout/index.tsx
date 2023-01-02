import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

export interface LayoutProps {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
       {props.children}
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
