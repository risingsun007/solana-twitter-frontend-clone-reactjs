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
  let [showNewTweet, setShowNewTweet] = useState(true);
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

      <Botside>
        <Avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4"
            alt="Elton Lazzarin"
          />
        </Avatar>

        <ProfileData>
          <strong>Elton Lazzarin</strong>
          <span>@elton_lazzarin</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
