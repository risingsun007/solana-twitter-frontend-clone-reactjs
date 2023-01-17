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
  const [tweetText, setTweetText] = useState("");
  const [doShow, setDoShow] = useState(false);
  const  wallet = useAnchorWallet();
  const doShowReceipient = false;

  async function makeTweet() {
    console.log(`enter makeTweet, walllet: ${wallet}`);
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
    setDoShow(props.showNewTweet);
  }, [props.showNewTweet]);

  return (
    <Modal style={customStyles} isOpen={doShow} >
      <Container2>
        <CloseDiv onClick={() => { props.onClick() }}>x</CloseDiv>
        <Avatar>
          <img src="../../avatar.png" alt="Avatar" />
        </Avatar>
        {doShowReceipient ?
          <ButtonDropDown> Everyone {DOWN_ARROW} </ButtonDropDown>
          :
          ""}
        <TextBox name="name" placeholder="What's Happening?" value={tweetText} onChange={onTextInput} />
        <TweetButton onClick={() => { makeTweet(); props.onClick() }}>
          Tweet</TweetButton>
      </Container2>

    </Modal>
  )
}

export default NewTweet;