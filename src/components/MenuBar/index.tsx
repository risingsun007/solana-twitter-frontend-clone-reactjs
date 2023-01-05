import React, { useState } from 'react';
import { AlternateEmail } from 'styled-icons/material-outlined';
import Modal from 'react-modal';
import Button from '../Button';
import NewTweet from '../NewTweet';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { createElement } from 'react';

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
import Home from '../../pages/home';
import JSXStyle from 'styled-jsx/style';

const MenuBar: React.FC = () => {
  let [showNewTweet, setShowNewTweet] = useState(false);
  const router = useRouter();
  const elements = [
    { icon: <HomeIcon />, text: 'home' },
    { icon: <ExploreIcon />, text: 'explore' },
    { icon: <BellIcon />, text: 'notifications' },
    { icon: <EmailIcon />, text: 'messages' },
    { icon: <FavoriteIcon />, text: 'bookmarks' },
    { icon: <ListIcon />, text: 'lists' },
    { icon: <ProfileIcon />, text: 'profile' }
  ];

  const navitems = elements.map((arr) => {
    const { icon, text } = arr;
    return (   
        <Link href={'/' + text}>
          <MenuButton className={router.pathname === '/' + text ? "active" : ""}>
            {icon}
            {text[0].toUpperCase() + text.slice(1)}
          </MenuButton>
        </Link>
    );
  });

  const NewTweetModal = () => (
    showNewTweet ?
      <NewTweet onClick={() => { setShowNewTweet(false) }} message="hellodkdk" showNewTweet={showNewTweet} />
      : ''
  );

  return (
    <Container>
      <Topside>
        <Logo />
        {navitems}
        {NewTweetModal()}
        <Button width="100%" onClick={() => { setShowNewTweet(true) }}>
          Tweet
        </Button>
      </Topside>
    </Container>
  );
};

export default MenuBar;
