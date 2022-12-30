import React, { useState } from 'react';
import { AlternateEmail } from 'styled-icons/material-outlined';
import Modal from 'react-modal';
import Button from '../Button';
import NewTweet from '../NewTweet';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  let [showNewTweet, setShowNewTweet] = useState(false);
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Lists</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>
        {
          showNewTweet ?
            <NewTweet onClick={() => { setShowNewTweet(false) }} message="hellodkdk" showNewTweet={showNewTweet} />
            : ''
        }
        <Button onClick={() => { setShowNewTweet(true) }}>
          <span>Tweet</span>
        </Button>
      </Topside>
    </Container>
  );
};

export default MenuBar;
