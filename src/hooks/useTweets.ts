import { useContext } from 'react';

import TweetContext from '../context/TweetsContext';

export default function useTweets() {
  const context = useContext(TweetContext);
  if (typeof context === 'undefined') {
    throw new Error('useTweets must be used within a TweetProvider');
  }

  return context;
}