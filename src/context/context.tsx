import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --sans-serif-font: FFDINWebProLight, 'Calibre Light', sans-serif;
        --sans-serif-italic: DINW01LightItalic, 'Georgia', sans-serif;
        --sans-serif-extra-bold: DINW01Medium;
        --sans-serif-bold: DINW01Regular;
        --serif-font: NewzaldBook, 'Georgia', sans-serif;
        --easing: cubic-bezier(0.77, 0.3, 0.39, 0.9);

        --font-size-s: 20px; 
        --font-size-xs: 16px;

        --idema-color: #0A195E;
        --text-color: black;
        --title-color: #0A195E;
        --background-color: white;
    }

    body {
        font-family: var(--sans-serif-font);
        font-size: 16px;
        line-height: 1.375em;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        color: var(--text-color);
        background-color: var(--background-color);

        
    }

    .main-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1,
    h2,
    h3 {
        font-family: var(--sans-serif-font), 'Fira Sans Condensed', sans-serif;
    }

    h6 {
        font-family: var(--italiana-font), 'Calibre Light';
    }

    p,
    a,
    span {
      color: var(--text-color);
      font-family: var(--sans-serif-font);
    }

    a {
        transition: color 0.3s var(--easing);
        text-decoration: none; 
        cursor: pointer;

        &:hover {
            font-weight: bold;
            text-decoration: underline;
        }
    }

    ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none
    }

    h1 {
        font-size: 2.5em
    }
    
    h2 {
        font-size: 1.625em
    }

    h1,h2,h3,h4 {
        font-weight: 100
    }

    h1 {

        line-height: 2.5em
    }

    h2,h3,h4 {
        line-height: 1.75em
    }

    h2 {
        margin: 26px 0
    }

    h3,h4 {
        font-size: 1.125em
    }

    h4 {
        font-size: 2em;
        line-height: 1.375em
    }

    p {
        line-height: 1.8em
    }

    button {
        border: 0;
        background: 0 0
    }

    button,input {
        outline: 0
    }



    html {
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
`;

const BackgroundContext = React.createContext({});

const BackgroundContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackgroundContext.Provider value={{}}>
      <GlobalStyles />
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundContextProvider };
