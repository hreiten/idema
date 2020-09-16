import React from 'react';
import { createGlobalStyle, ThemeProps } from 'styled-components';

type StyleProps = ThemeProps<unknown> & {
  colorScheme: ColorScheme;
};

type ColorScheme = {
  textColor: string;
  backgroundColor: string;
  idemaColor: string;
};

const GlobalStyles = createGlobalStyle`
    :root {
        --sans-serif-font: DINW01Regular, 'Calibre Light', sans-serif;
        --serif-font: NewzaldBook, Georgia, serif;
        --easing: cubic-bezier(0.77, 0.3, 0.39, 0.9);
    }

    body {
        font-family: var(--sans-serif-font);
        font-size: 1.125em;
        line-height: 1.4;
        width: 100%;
        padding: 0 200px;
    }

    h1,
    h2,
    h3 {
        font-family: var(--serif-font);
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
        --text-color: ${(props: StyleProps) => props.colorScheme.textColor};
        --text-color-transparent: ${(props: StyleProps) => props.colorScheme.textColor + 'D9'};
        --background-color: ${(props: StyleProps) => props.colorScheme.backgroundColor};
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

export const colorSchemes: ColorScheme = { textColor: '#F2C5E0', backgroundColor: '#070649', idemaColor: '#EF4A4D' };

type BackgroundContextProps = {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
};

const BackgroundContext = React.createContext({
  colorScheme: (null as any) as ColorScheme,
  setColorScheme: () => null,
} as BackgroundContextProps);

const BackgroundContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = React.useState((null as unknown) as ColorScheme);

  return (
    <BackgroundContext.Provider
      value={{
        colorScheme,
        setColorScheme,
      }}
    >
      <GlobalStyles />
      {colorScheme && <GlobalColorStyles colorScheme={colorScheme} />}
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundContextProvider };
