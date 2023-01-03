import React from 'react';

import ProfilePage from '../ProfilePage';
import Link from 'next/link';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link href="/home">
        <button>
          <BackIcon />
        </button>
        </Link>

        <ProfileInfo>
          <strong>Default Person's Name</strong>
          <span>432 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
