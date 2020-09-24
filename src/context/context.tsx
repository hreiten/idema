import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --sans-serif-font: FFDINWebProLight, 'Calibre Light', sans-serif;
        --sans-serif-italic: DINW01LightItalic, Georgia, serif,
        --sans-serif-extra-bold: DINW01Medium;
        --sans-serif-bold: DINW01Regular;
        --serif-font: NewzaldBook, Georgia, serif;
        --easing: cubic-bezier(0.77, 0.3, 0.39, 0.9);

        --font-size-s: 20px; 
        --font-size-xs: 16px;

        --idema-color: #20327a;
        --text-color: black;
        --title-color: blue;
        --background-color: white;
    }

    body {
        font-family: var(--sans-serif-font);
        font-size: 16px;
        line-height: 1.375em;
        width: 100%;
        margin: 0;

        color: var(--text-color);
        background-color: var(--background-color);

        padding-bottom: 80px
    }

    h1,
    h2,
    h3 {
        font-family: var(--serif-font), Georgia, serif;
    }

    p,
    a,
    span {
      color: var(--text-color);
      font-family: var(--sans-serif-font);
    }

    a {
        color: var(--text-color);
        transition: color 0.3s var(--easing);
        text-decoration: none; 
        cursor: pointer;
    }

    ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none
    }

    h1,h2 {
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
