import React, { useState } from 'react';
import useTweets from '../../hooks/useTweets'

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';


export default function Tweets(): JSX.Element {
  const [likeCounter, setLikeCounter] = useState(0);
  const tweetsInfo = useTweets();
  console.log(`tweetsInfo: ${tweetsInfo}`)
  function formatDate(t: number): string {
    const minuteDiff = (Date.now() / 1000 - t) / 60;
    const MIN_IN_DAY = 1400;
    const MIN_IN_HR = 60;
    const divisors = { 'd': MIN_IN_DAY, 'h': MIN_IN_HR, 'm': 1 };
    let label: string;

    if (minuteDiff >= MIN_IN_DAY) {
      label = 'd';
    } else if (minuteDiff >= MIN_IN_HR) {
      label = 'h';;
    } else if (minuteDiff >= 1) {
      label = 'm'
    } else {
      return `now`;
    }

    return `${Math.round(minuteDiff / divisors[label as keyof typeof divisors])}${label}`;
  }

  return (
    <>
      { !!!tweetsInfo?.tweets ? <>Loading...</> :  
      tweetsInfo.tweets.map((user, index) => (
        <Container key={index}>
          {user.retweet ? (
            <Retweeted>
              <RocketseatIcon />
              You retweeted
            </Retweeted>
          ) : (
            ''
          )}

          <Body>
            <Avatar>
              <img src={user.avatar || "../../avatar.png"} alt={user.author} />
            </Avatar>

            <Content>
              <Header>
                <strong>{user.authorName || user.author}</strong>
                <Dot />
                <time>{formatDate(user.posttime)}</time>
              </Header>

              <Description>{user.posttext}</Description>

              <ImageContent>
                {user.postimage ? (
                  <img src={user.postimage} alt="Imge Post" />
                ) : (
                  ''
                )}
              </ImageContent>

              <Icons>
                <Status>
                  <CommentIcon />
                  {user.commentscount}
                </Status>
                <Status>
                  <RetweetIcon />
                  {user.retweetscount}
                </Status>
                <Status onClick={() => setLikeCounter(likeCounter + 1)}>
                  <LikeIcon />
                  {user.likecount + likeCounter}
                </Status>
              </Icons>
            </Content>
          </Body>
        </Container>
      ))}
    </>
  );
};

