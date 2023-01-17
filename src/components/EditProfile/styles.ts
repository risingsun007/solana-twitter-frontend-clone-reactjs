
import styled, { css } from 'styled-components';
import Modal from 'react-modal';
import { ArrowLeft } from '../../styles/Icons'
import Button from '../Button'
import React from 'react'



export const Container = styled.div`
    display: flex;
    width: min(601px, 100%);
    flex-direction: column;
`

export const CloseButton = styled(ArrowLeft)`
width: 20px;
height: 20px;
font-style: bold;
margin-bottom: 20px;
`
export const SaveButton = styled(Button)`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 10px;
  height: 10px;
  line-height :0px;
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
      width: 'min(100%, 601px)',
      height: '370px',
      borderRadius: '20px',
      outline: '0px',
      overflow: 'visible',  
      padding: '10px',  
      background: 'var(--backColorScheme)',
  },
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    id: string;
    label: string;
}

export const InputGroup = styled.div`
  position: relative;
  width: min(80%, 800);
`;

export const InputLabel = styled.label`
  color: #71767B;
  position: absolute;
  top: 20px;
  left: 0px;
  transition: 300ms;
  transform: translate(0%, 0%);
  background-color: transparent;
  font-family: American GT;
  font-size: 15px;
  padding: 0px 8px;
  width: min(80%, 800px);
  

`;

export const InputField = styled.input`
  outline: none;
  padding: 12px 8px 8px;
  margin: 16px 0px 0px;
  border: 1px solid #dadce0;
  border-radius: 5px;
  height: 60px;
  font-size: 18px;
  width: min(80%, 800px);

  &:focus
  {
    
    border: 2px solid var(--twitter);
  }

  &:focus + ${InputLabel}
  {
  color: var(--twitter);  
  }
`;
