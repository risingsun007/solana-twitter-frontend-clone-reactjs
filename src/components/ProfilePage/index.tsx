import React, { useState, useEffect } from 'react';
import { PublicKey } from "@solana/web3.js";

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

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
  const [pubKey, setPubKey] = useState('');
  const [provider, setProvider] = useState<PhantomProvider | null>(null);

  useEffect(() => {
    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;
      console.log(`solana in window`)
      if (solWindow?.solana?.isPhantom) {
        console.log(`Phanton in window`)
        setProvider(solWindow.solana);
        const connectWallet = async () => {
          const solWindow = window as WindowWithSolana;
          if (solWindow?.solana?.isPhantom){
            await solWindow.solana.connect({ onlyIfTrusted: false });
            console.log(`connect result: ${JSON.stringify(solWindow.solana, null, 2)})}`);
           
            setPubKey(solWindow?.solana?._publicKey?.toString() || "Not Connected");
          }
        }
        connectWallet();
        console.log(`solana window info: ${JSON.stringify(solWindow.solana, null, 2)})}`)
        // Attemp an eager connection
        solWindow.solana.connect({ onlyIfTrusted: false });
      } else {
        console.log(`Phanton NOT in window`)
      }
    } else {
      console.log(`solana not in window`)
    }

  }, []);

  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="../../avatar.png"
            alt=""
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>{pubKey ? `Public Key: ${pubKey.slice(0,10)}...` : "TODO: Connect to Wallet Button"}</h1>
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
