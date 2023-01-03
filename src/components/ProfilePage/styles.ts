import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerSameLine = styled.div`
  display: flex;
  flex-direction: row;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface BannerProps{
  imageUrl?: string;
}

export const Banner = styled.div<BannerProps>`
  flex-shrink: 0;
  background: grey;
  width: 100%;
  height: min(33vw, 199px);
  background-image: ${(props) => (props.imageUrl ? 'url(props.imageUrl' : '')};
  position: relative;
`;

export const Avatar = styled.div`
  img {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const ConnectButton2 = styled(Button)`
  position: absolute;
  top: 2vw;
  left: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;



const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const ConnectButton = styled.button`
  padding: 7px;
  border-radius: 25px;
  border-style: none;
  border-width: 1px;
  background-image: linear-gradient(to right, #84fab0 0%, #a6c1ee 51%, #fbc2eb 100%);

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  top: 50%;
  left: 50%;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  grid-column: 4 ;
  grid-row: 5;
`
