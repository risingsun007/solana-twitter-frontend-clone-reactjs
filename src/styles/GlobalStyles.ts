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
  .Modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
  }

  .modal3 {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
  }
  .overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
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
  
  .zzzz {
    background: green,
    height: '10%',
    width: '10%',
  
  }

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
    --white: #d9d9d9;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;
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
