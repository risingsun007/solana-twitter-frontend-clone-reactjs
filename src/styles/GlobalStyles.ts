import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media (prefers-color-scheme: dark) {
      background: black;
      color: white;
    }

    @media (prefers-color-scheme: light) {
      background: white;
      color: black;
    }
  
  }
 
  .overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  }

  .WalletModalProvider{
    background: yellow;
    color: white;
  }

  .wallet-modal{
    background: pink;
    color: red;
  }
 
  .class1{
    background: blue;
    color: red;
  }

  .WalletMultiButton{
    background: blue;
    color: red; 
  }

  .wallet-adapter-modal-container{
    position: fixed;
    top: 20%;
    left: 40%;
    border-radius: 30px; 
    border: 10px;
    border-color: green;
  }

  .wallet-adapter-modal-wrapper{
    border: 2px grey solid;
    border-radius: 30px;  
    padding: 15px;
  }

  .wallet-adapter-modal-fade-in{
    background: red;
  }

  .wallet-adapter-modal-list{
    color: green;
    // TODO change model
  }

  .wallet-adapter-modal-title{
    // TODO change model
  }
  .modal {
    top: '5%',
    margin: 'auto',
    bottom: 'auto',
    width: '40%',
    height: '275px',
    borderRadius: '20px',
    outline: '0px',
    overflow: 'visible',  
    padding: '10px',  
    background: "red",

    @media (prefers-color-scheme: dark) {
      background: black;
      color: white;
    }
    @media (prefers-color-scheme: light) {
      background: white;
      color: black;
    } 
  }

  a:link { text-decoration: none; }

  a:visited { text-decoration: none; }

  a:hover { text-decoration: none; }

  a:active { text-decoration: none; }

  .modal2 {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}


  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
  }

  :root {
    --primary: #000;
    --secondary: #15181c;
    --search: #202327;
    --white: #ffffff;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;
    --twitter-grey-hover: #0F14191A;
    --backColorScheme: #000;
    --modelOutlay: rgba(0, 0, 0, .4);
  }

  @media (prefers-color-scheme: dark) {
    :root { --backColorScheme: black; }
    :root { --modelOutlay: rgba(200, 200, 200, .2)};
  }

  @media (prefers-color-scheme: light) {
    :root { --backColorScheme: white; }
  }
`;
