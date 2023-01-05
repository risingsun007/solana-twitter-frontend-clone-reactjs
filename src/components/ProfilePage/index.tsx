import React, { useState, useEffect } from 'react';
import { PublicKey } from "@solana/web3.js";
import Button from '../Button';
import Link from 'next/link';

import Feed from '../Feed';

import {
  Container,
  ContainerSameLine,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
  ConnectButton2,
  Header,
  BackIcon, 
  ProfileInfo,
} from './styles';
import { AnyAaaaRecord } from 'dns';

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
  _publicKey?: PublicKey;
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider;
}

const ProfilePage: React.FC = () => {
  const [pubKey, setPubKey] = useState<string | undefined>('');
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [doConnectWallet, setDoConnectWallet] = useState<boolean>(true);
  const [phantom, setPhantom] = useState<any>(null);

  const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("connectWalletzz");
    if (phantom) {
      phantom.connect().then(() => {
        setPubKey(phantom?._publicKey?.toString())
      });
    } else {
      console.log("no phantom");
    }
    return undefined;
  }

  useEffect(() => {

    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;

      if (solWindow?.solana) {
        setProvider(solWindow?.solana);
        setPhantom(solWindow["solana"]);
        console.log(`set phantom wallet`);

        const connectWallet = async () => {
          const solWindow = window as WindowWithSolana;
          if (solWindow?.solana?.isPhantom) {

            if (solWindow?.solana?._publicKey?.toString() !== undefined) {
              setPubKey(solWindow?.solana?._publicKey?.toString());
            }
            else {
              const rtn = await solWindow.solana.connect({ onlyIfTrusted: false });
              setPubKey(rtn.publicKey.toString());
            }
          }
        }
      }
    } else {
      console.log(`solana not in window`)

    }

  }, []);

  return (
    <Container>

       <Header>
        <Link href="/home">
          <button>
            <BackIcon />
          </button>
        </Link>

        <ProfileInfo>
          <strong>Default Person's Name</strong>
          <span>432 Tweets zzzz</span>
        </ProfileInfo>
      </Header>
      
      <Banner>
        <Avatar>
          <img
            src="../../avatar.png"
            alt=""
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <ContainerSameLine>
          <EditButton outlined>Set up profile</EditButton>
          <h1>{pubKey ? `Public Key: ${pubKey.slice(0, 10)}...` : <ConnectButton2 onClick={connectHandler}> Connect Wallet </ConnectButton2>}</h1>
        </ContainerSameLine>
        <h2>TODO associated name @...</h2>

        <p>
          TODO: Insert BIO if available
        </p>

        <ul>
          <li>
            <LocationIcon />
            TODO: Insert Location if available
          </li>
          <li>
            <CakeIcon />
            TODO: Insert Birthday if available
          </li>
        </ul>

        <Followage>
          <span>
            <strong>98 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
