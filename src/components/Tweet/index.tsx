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
      console.log("getTweets() is about to be called");
      const result = await getTweets();
      console.log("before set data")
      console.log(JSON.stringify(result[0], null, 2));
      let zz = [result[0]];
      console.log("zz is: " + JSON.stringify(zz, null, 2));

      console.log(`${typeof (zz)}`)

      setData(result);
      console.log("after set data")

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
              <img src={user.avatar} alt={user.author} />
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
