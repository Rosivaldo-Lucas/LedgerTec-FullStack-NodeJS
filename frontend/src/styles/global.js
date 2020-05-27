import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    position: relative;
  }

  body, input, button {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: #222;
  }

  #root {
    max-width: 1020px;
    margin: 0px auto;
    padding: 0px 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
