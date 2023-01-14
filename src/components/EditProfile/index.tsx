import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import useWorkspace from '../../hooks/useWorkspace'
import { SaveButton } from './styles'

import { Container, customStyles, CloseButton, InputProps, InputGroup, InputLabel, InputField } from './styles'
import useProfile from '../../hooks/useProfile'



const Input: React.FC<InputProps> = ({ id, label, ...rest }) => {
  return (
    <InputGroup>
      <InputField id={id} {...rest} />
      <InputLabel htmlFor={id} >{label}</InputLabel>
    </InputGroup>
  );
}

interface EditProfileProps {
  showEditProfile2: boolean;
  onClick: () => void;
}

const EditProfile: React.FC<EditProfileProps> = (props) => {
  const profileData = useProfile();
  const [name, setName] = useState<string | undefined>("");
  const [publicKey, setPublicKey] = useState<string | undefined>("");
  const [location, setLocation] = useState<string | undefined>("Metaverse");
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>("https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg");

  const workspace = useWorkspace();

  useEffect(() => {
    setPublicKey(workspace?.wallet?.publicKey?.toString() || "");
    setName(profileData?.profile?.name);
    setAvatarUrl(profileData?.profile?.avatarUrl);
    setLocation(profileData?.profile?.location);
    // TODO update name for profile context      
  }, [workspace, profileData]);

  function onInput(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`x: ${event.target.id}`);
    const value = event.target.value;
    switch (event.target.id) {
      case "name":
        setName(value);
        break;
      case "publicKey":
        setPublicKey(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "avatarUrl":
        setAvatarUrl(value);
        break;
    }
  }

  function updateProfileWeb3() {
    if(name){
      console.log("enter updateProfileWeb3")
      profileData?.createProfile(name, avatarUrl || "", location || "");
    }
    console.log(JSON.stringify(profileData));
    console.log("leave updateProfileWeb3")
  }
  return (
    <Modal style={customStyles} isOpen={props.showEditProfile2} >
      <Container>
        <CloseButton onClick={() => { console.log("click close button handler button"); props.onClick() }} />
        <Input id="publicKey" label="Wallet Public Key" disabled={true} value={publicKey} onChange={onInput} />
        <Input id="name" label="Name" placeholder="Name" value={name} onChange={onInput} />
        <Input id="avatarUrl" label="Avatar URL" value={avatarUrl} onChange={onInput} />
        <Input id="location" label="Location" value={location} onChange={onInput} />
        <SaveButton onClick={updateProfileWeb3}>Save</SaveButton>
      </Container>
    </Modal>
  )
}

export default EditProfile
