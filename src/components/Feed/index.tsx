import React from 'react';

import Tweets from '../Tweets';
import { Container, Tab, TweetsContainer} from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <TweetsContainer>
        <Tweets />
      </TweetsContainer>
    </Container>
  );
};

export default Feed;
