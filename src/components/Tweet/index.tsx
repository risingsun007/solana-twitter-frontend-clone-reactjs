import React, { useEffect, useState } from 'react';
import { UserType } from '../../constants';
import { getTweets } from '../../api/SolanaWeb3';
import data2 from '../../data.json'

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
import { Zzz } from 'styled-icons/remix-fill';



interface PropsType {
  data?: Array<UserType>;
}


const Tweet: React.FC<PropsType> = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  const [data, setData] = useState<UserType[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      console.log("requesting tweets from Solana Blockchain");
      const result = await getTweets();
      console.log("got here at Tweet aa");
      console.log(`${result.length ? result[0].author: "no data"}`)
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((user, index) => (
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
              <img src={"../../avatar.png"} alt={user.author} />
            </Avatar>

            <Content>
              <Header>
                <strong>{user.author}</strong>
                <span>{user.twitteruser}</span>
                <Dot />
                <time>{user.posttime}</time>
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

export default Tweet;
