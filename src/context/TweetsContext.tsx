import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Tweet } from "../models"
import useWorkspace from '../hooks/useWorkspace';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { fetchTweets, sendTweet } from '../api';

export interface TweetContextProps {
  tweets: Tweet[] | null,
  sendTweet: (wallet: AnchorWallet, content: string) => void
}

const TweetsContext = React.createContext<TweetContextProps | null>(null);

export function TweetsProvider<React>({ children }: { children: React.ReactNode }) {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const workspace = useWorkspace();

  useEffect(() => {
    (async () => {
      setTweets((await fetchTweets(workspace.program))
        .sort((a: Tweet, b: Tweet) => b.posttime - a.posttime));
    })();
  }, [workspace]);

  const sendTweetAndUpdate = useCallback(
    async (wallet: AnchorWallet, content: string) => {
      if(workspace?.wallet){
        const newTweet = await sendTweet(wallet, content);
        setTweets([newTweet, ...tweets]);
      } 
    },
    [workspace, tweets],
  );

  const value = useMemo(
    () => ({
      tweets,
      sendTweet: sendTweetAndUpdate,
    }),
    [tweets, sendTweetAndUpdate],
  );

  return (
    <TweetsContext.Provider value={value}>{children}</TweetsContext.Provider>
  );
}

export default TweetsContext;
