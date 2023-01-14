import React, { useState, useEffect, useRef } from 'react';
import { PublicKey } from "@solana/web3.js";
import Link from 'next/link';
import Feed from '../Feed';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import  EditProfile  from '../EditProfile'
import {
  Container,
  ContainerSameLine,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
  Button2,
  Header,
  BackIcon,
  ProfileInfo,
} from './styles';
import  useProfile  from '../../hooks/useProfile';

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
  const profileData = useProfile();
  const { setVisible } = useWalletModal(); 
  const { connected, publicKey } = useWallet();
  const phantom = useRef<PhantomProvider | null>(null);
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);

  const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setVisible(true);
    console.log(`connectWalletzz: ${connected}`);
    return undefined;
  }
  

  useEffect(() => {
    console.log("use effect called in ProfilePage")
    const solWindow = window as WindowWithSolana;
    if ("solana" in window) {
      if (solWindow?.solana) {
        phantom.current = (solWindow["solana"]);
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
          <strong>{profileData?.profile?.name}</strong>
          <span>432 Tweets zzzz</span>
        </ProfileInfo>
      </Header>

      <Banner>
        <Avatar>
          <img
            src={profileData?.profile?.avatarUrl || "../../avatar.png"}
            alt=""
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <ContainerSameLine>
          <Button2 rightJustified onClick={ () =>(setShowEditProfile(true))}>Set up profile</Button2>
            {
            publicKey ? <Button2 onClick={connectHandler}> {publicKey?.toString().slice(0, 10)}...  </Button2> 
            : phantom !== null ? <Button2 onClick={connectHandler}> Connect to Wallet </Button2>
              :   <a href="https://phantom.app/"><Button2> Install Phanton Wallet </Button2></a> 
            } 
        </ContainerSameLine>
      <EditProfile onClick={() => { setShowEditProfile(false)}} showEditProfile2 = {showEditProfile}/>
        <h2>{profileData?.profile?.name}</h2>
        <ul>
          <li>
            <LocationIcon />
            {profileData?.profile?.location}
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
