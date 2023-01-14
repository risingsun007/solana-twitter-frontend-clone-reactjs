import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import { sendTweet } from "../../api";
import useWorkspace from "../../hooks/useWorkspace";
import { TextBox, Container2, CloseDiv, Avatar, ButtonDropDown, TweetButton, customStyles } from './styles';
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import { PublicKey } from "@solana/web3.js";
const DOWN_ARROW = String.fromCharCode(9660);


interface NewTweetProps {
  message: string;
  showNewTweet: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}


type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

const NewTweet: React.FC<NewTweetProps> = (props) => {
  const workspace = useWorkspace();
  const [tweetText, setTweetText] = useState("");
  const [walletAvail, setWalletAvail] = useState(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [pubKey, setPubKey] = useState<PublicKey | null>(null);
  const [doShow, setDoShow] = useState(false);
  const [walletAddressTest, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const { connected } = useWallet();
  const  wallet = useAnchorWallet();

  let walletAddress = "";
  const doShowReceipient = false;
  async function connect_to_wallet() {
    const solWindow = window as WindowWithSolana;
    if (solWindow?.solana?.isPhantom)
      await solWindow.solana.connect({ onlyIfTrusted: false });

  }

  type WindowWithSolana = Window & {
    solana?: PhantomProvider;
  }

  async function makeTweet() {
    console.log(`enter makeTweet, walllet: ${wallet}`);
    
    if(wallet!==undefined){
    for( const [x, y] of Object.entries(wallet)){
      if(x !=="idl" && x !=="program"){
        console.log(`${x}`);

        }
      }
    }
    if(wallet){
      sendTweet( wallet , tweetText);
    } else {
      // TODO:  Alert user that couldn't find wallet
    }
  }

  function onTextInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    // TODO: alter icon to show how much length you have left
    setTweetText(event.target.value)
  }

  useEffect(() => {
    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;
      console.log(`solana in window`)
      if (solWindow?.solana?.isPhantom) {
        console.log(`Phanton in window`)
        setProvider(solWindow.solana);
        setWalletAvail(true);
        // Attemp an eager connection
        solWindow.solana.connect({ onlyIfTrusted: false });
      } else {
        console.log(`Phanton NOT in window`)
      }
    } else {
      console.log(`solana not in window`)
    }
    console.log("set doshow ")
    setDoShow(props.showNewTweet);
  }, [props.showNewTweet]);

  return (
    <Modal style={customStyles} isOpen={doShow} >
      <Container2>
        <CloseDiv onClick={() => { console.log("click close button handler button"); props.onClick() }}>x</CloseDiv>
        <Avatar>
          <img src="../../avatar.png" alt="Avatar" />
        </Avatar>
        {doShowReceipient ?
          <ButtonDropDown> Everyone {DOWN_ARROW} </ButtonDropDown>
          :
          ""}
        <TextBox name="name" placeholder="What's Happening?" value={tweetText} onChange={onTextInput} />
        <TweetButton onClick={() => { makeTweet(); console.log("click close button handler button"); props.onClick() }}>
          Tweet</TweetButton>
      </Container2>

    </Modal>
  )
}

export default NewTweet;