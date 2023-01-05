

import { useEffect } from 'react';
import {
  Program,
  Provider,
  BN,
  web3,
  Idl,
  setProvider,
  AnchorProvider
} from '@project-serum/anchor'
import {
  Connection,
  clusterApiUrl,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
  Account,
  LAMPORTS_PER_SOL,
  TransactionSignature,
  Commitment,
  AccountInfo,
  RpcResponseAndContext,

} from '@solana/web3.js'


import anchor from '@project-serum/anchor'

import tweetIdl from '../idl/tweet.json'
import { UserType } from '../constants';
import { Data } from 'styled-icons/boxicons-regular';



export async function getTweets(): Promise<UserType[]> {
  const PUBLIC_KEY = "GxgudfRVS2fdXJ2LWEXCg7y8HUH531xNHMn4hviF77Zh"

  const programId = new web3.PublicKey("GxgudfRVS2fdXJ2LWEXCg7y8HUH531xNHMn4hviF77Zh");

  getProvider();
  const program = new Program(tweetIdl as any, programId);
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
  const tweets = await program.account.tweet.all();
  console.log(`${JSON.stringify(tweets)}`)
  console.log(`requested data from solana network, num tweets: ${tweets.length}`)
  const tweetsFormatted: UserType[] = tweets
    .filter(tweet => (tweet.account as any).message.length > 0)
    .map((tweet) => {
      let data = tweet.account as any;
      console.log("formatting Tweet")
      return {
        avatar: "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png",
        author: String(data.creator),
        twitteruser: "twitteruser ZZZ",
        posttime: "2011-11-18T14:54:39.929",
        posttext: data.message,
        likecount: 0
      }
    }, []);

  return tweetsFormatted;
}



const createConnection = () => {
  return new Connection(clusterApiUrl("devnet"));
};

function getProvider() {
  /* create the provider and return it to the caller */
  /* network set to local network for now */
  const network = "https://api.devnet.solana.com";
  const connection = new Connection(network);
  setProvider({ "connection": connection });
}


export async function testSol3() {
  console.log("called testSOl3 ");
  // const idl2 = JSON.parse(
  //   as any
  //);
  const programId = new web3.PublicKey("GxgudfRVS2fdXJ2LWEXCg7y8HUH531xNHMn4hviF77Zh");
  // await setProvider()
  //const connect1  = await createConnection()
  const program = new Program(tweetIdl as any, programId);
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
  console.log("got here")
  console.log("got zzzzz");


}


/*
// 1. Define the sendTweet endpoint.
export const sendTweet = async (topic, content) => {
  const { wallet, program } = useWorkspace()

  // 2. Generate a new Keypair for our new tweet account.
  const tweet = web3.Keypair.generate()

  // 3. Send a "SendTweet" instruction with the right data and the right accounts.
  await program.value.rpc.sendTweet(topic, content, {
      accounts: {
          author: wallet.value.publicKey,
          tweet: tweet.publicKey,
          systemProgram: web3.SystemProgram.programId,
      },
      signers: [tweet]
  })

  // 4. Fetch the newly created account from the blockchain.
  const tweetAccount = await program.value.account.tweet.fetch(tweet.publicKey)
  
  // 5. Wrap the fetched account in a Tweet model so our frontend can display it.
  return new Tweet(tweet.publicKey, tweetAccount)
}
*/

/*
const phantomWallet: React.FC<{}> =  () => {
  const { solana } = window;

  if (solana) {
    try {
      const response = await solana.connect();
      console.log('wallet account ', response.publicKey.toString());
      setWalletKey(response.publicKey.toString());
    } catch (err) {
     // { code: 4001, message: 'User rejected the request.' }
    }
  }
};
*/
