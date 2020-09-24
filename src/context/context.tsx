import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --sans-serif-font: DINW01Regular, 'Calibre Light', sans-serif;
        --serif-font: NewzaldBook, Georgia, serif;
        --easing: cubic-bezier(0.77, 0.3, 0.39, 0.9);

        --font-size-s: 20px; 
        --font-size-xs: 16px;
    }

    body {
        font-family: var(--sans-serif-font);
        font-size: 1.125em;
        line-height: 1.4;
        width: 100%;
        margin: 0;
    }

    h1,
    h2,
    h3 {
        font-family: var(--serif-font);
    }

    p,
    a,
    span {
      color: var(--text-color);
      font-size: var(--font-size-s);
      font-family: var(--sans-serif-font);
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

const GlobalColorStyles = createGlobalStyle`
    :root {
        --text-color: black;
        --title-color: blue;
        --background-color: white;
    }

    body {
            color: var(--text-color);
            background-color: var(--background-color);
            transition: background-color 0.3s var(--easing), color 0.3s var(--easing);
        }

    a {
        color: var(--text-color);
        transition: color 0.3s var(--easing);
    }
`;

const BackgroundContext = React.createContext({});

const BackgroundContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackgroundContext.Provider value={{}}>
      <GlobalStyles />
      <GlobalColorStyles />
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundContextProvider };
