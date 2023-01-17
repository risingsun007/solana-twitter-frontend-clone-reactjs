import memoize from 'p-memoize'; // TODO: use this library
import {
  Program,
  web3,
  Idl,
  AnchorProvider
} from '@project-serum/anchor'
import {
  Connection, PublicKey,
} from '@solana/web3.js'

import tweetIdl from '../idl/tweet.json'
import { Tweet, ProfileData } from '../models';
import { AnchorWallet } from '@solana/wallet-adapter-react';
const programId = new web3.PublicKey("38Skw71m45pWoVV9LjRy1atkPyhwk8eW6zifmUKXxbga");

async function addTweetAuthorInfo(program: any, tweet: Tweet): Promise<Tweet> {
  const profile = await getProfile(program, new PublicKey(tweet.author));
  if (profile) {
    tweet.authorName = profile.name;
    tweet.avatar = profile.avatarUrl;
    console.log("found profile of author");
  } else {
    console.log(`didn't find program or tweet ${tweet.author} ${program}, result = ${profile}`);
  }
  return tweet;
}

export async function fetchTweets(program: Program<Idl> ): Promise<Tweet[]> {
  const tweets = await program.account.tweet.all();

  let tweetsFormatted: Tweet[] = tweets
    .map((tweet) => {
      let data = tweet.account as any;
      return {
        avatar: "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png",
        author: String(data.creator),
        twitteruser: String(data.creator),
        posttime: data.timestamp,
        posttext: data.message,
        likecount: 0
      }
    });

  return (await Promise.all(tweetsFormatted.map(tweet => addTweetAuthorInfo(program, tweet))))
    .sort((a, b) => (b.posttime - a.posttime));
}

export const sendTweet = async (wallet: AnchorWallet, content: string): Promise<Tweet> => {
  const commitment = "processed";
  const provider1 = new AnchorProvider(new Connection("https://api.devnet.solana.com"),
    wallet, { commitment, preflightCommitment: commitment });
  const tweet = web3.Keypair.generate();
  const program = new Program(tweetIdl as any, programId, provider1);

  let result = await program.rpc.sendTweet(content, {
    accounts: {
      tweet: tweet.publicKey,
      author: wallet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    },
    signers: [tweet],
  });
  console.log(`sendTweet result: ${result}`);

  const tweetAccount = await program.account.tweet.fetch(tweet.publicKey);
  console.log(`tweetAccount ${tweetAccount}`)
  return tweetAccount as Tweet;
};


const getProfilePDA = (program: Program<Idl>, ownerPublicKey: PublicKey): any => {
  try {
    if (!ownerPublicKey || !program) {
      console.log(`owner public key not found`)
      return null;
    }
    return web3.PublicKey.findProgramAddressSync(
      [ownerPublicKey.toBuffer(), Buffer.from('profile')],
      program.programId,
    );
  } catch (e) {
    console.log(`error with getProfilePDA, ${JSON.stringify(e)}`);
    return null;
  }
}

const getCacheKey = ([workspace, ...args]: any) =>
  JSON.stringify([workspace.program?.programId, ...args]);

export async function getProfile(program: Program<Idl>, ownerPublicKey: PublicKey): Promise<ProfileData | null> {
  if (!program || !ownerPublicKey) {
    console.log(`no program or ownerpublickey: ${ownerPublicKey}, program: ${program}`)
    return null;
  }
  let publicKey = await getProfilePDA(program, new PublicKey(ownerPublicKey));
  if (!publicKey) {
    return null;
  } else {
    publicKey = publicKey[0];
  }
  const profileAccount = await program.account.profile.fetchNullable(
    publicKey,
  );
  if (!profileAccount) {
    return null;
  }
  return profileAccount as unknown as ProfileData;
}



export const createProfile = async ({ wallet }: any, name: string, avatarUrl: string, location: string): Promise<ProfileData> => {
  const commitment = "processed";
  const provider1 = new AnchorProvider(new Connection("https://api.devnet.solana.com"),
    wallet, { commitment, preflightCommitment: commitment });
  const program = new Program(tweetIdl as any, programId, provider1);
  const ownerPublicKey = wallet.publicKey;
  const [PDAKey, bump] = getProfilePDA(program, new PublicKey(ownerPublicKey));
  let result = await program.rpc.createProfile(bump, name, avatarUrl, location, {
    accounts: {
      profile: PDAKey,
      owner: wallet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    },
    signers: [],
  });

  const PDAAccount = await program.account.profile.fetch(PDAKey);
  return PDAAccount as ProfileData
};





