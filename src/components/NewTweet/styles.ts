import styled, { css } from 'styled-components';
import Modal from 'react-modal';
import { MiniProgram } from 'styled-icons/remix-fill';

export const Container2 = styled.div`
    display: grid;
    width: min(601px, 100%);
    grid-template-columns:  12fr 31fr 50fr 6fr;
    grid-template-rows: 5fr 8fr 10fr 5fr 4fr;
`


export const TextBox = styled.textarea`
font-size: 20px;
padding: 10px;
border: none;
border-radius: 10px;
outline: none;
::placeholder {
  color: grey;
  font-weight: 500;
}
grid-column: 2 / span 3;
grid-row: 3 /span 2;
`;

interface Props {
    name?: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    outlined?: boolean;
}


export const CloseDiv = styled.div<Props>`
  font-size: 20px;
  cursor: pointer;
  outline: 0;
  text-align: left;
  height: 40px;
  grid-column: 1 / span 4;
  grid-row: 1;
`

export const Avatar = styled.div`
  img {
    width: 49px;
    height: 49px;
    background: var(--gray);
    border-radius: 50%;
    grid-column: 1;
    grid-row: 2;
  } 
`;

export const ButtonDropDown = styled.button`
  border-style: solid;
  border-color: lightgrey;
  border-width: 1px;
  border-radius: 10px;
  width: 5rem;
  height: 1.5rem;
  color: var(--twitter);
  vertical-align: middle;
  grid-column: 2 /span 3;
  grid-row: 2;
`

interface Props {
  outlined?: boolean;
}


export const TweetButton = styled.button<Props>`
background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 7px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  top: 50%;
  left: 50%;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-hover-light)'};
  }

  grid-column: 4 ;
  grid-row: 5;
`
export const customStyles : Modal.Styles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:'var(--modelOutlay)',
      
  },
  content: {
      top: '5%',
      margin: 'auto',
      bottom: 'auto',
      width: 'min(40%, 600px)',
      height: '275px',
      borderRadius: '20px',
      outline: '0px',
      overflow: 'visible',  
      padding: '10px',  
      background: 'var(--backColorScheme)',
  },
};


