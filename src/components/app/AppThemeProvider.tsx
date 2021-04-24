import '@fontsource/lato';
import '@fontsource/lato/700.css';
import React, { useMemo } from 'react';
import {
  createGlobalStyle,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import { appEnv } from '../../config/environment';
import { AppTheme, Theme } from '../../types/theme';

interface AppProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-size: 1em;
  box-sizing: border-box;
}
body {
  font-family: 'Lato';
  height: 100%;
  background-color: #C2CBDC;
  padding: 30px; 

}

#root {
  height: 100%;
}

div, input {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  font-family: inherit;
}

html {
    height: 100%;
    font-size: 1rem;
  }
  
`;

const AppThemeProvider = (props: AppProps) => {
  const theme = useMemo<AppTheme>(() => {
    const defaultTheme: Theme = {
      colors: {
        primaryColor: '#262A2D',
        accentColor: '#ffffff',
        bgPrimaryColor: '#F9F9F9',
        bgAccentColor: '#FDFDFD',
        bgPrimaryColor2: '#F3F7FA',
        bgPrimaryColor3: '#F3F4F8',
      },
      fontSizes: {
        tiny: '12px',
        small: '14px',
        medium: '16px',
        large: '18px',
        large2: '24px',
        landingHeader: '30px',
        header: '32px',
      },
    };
    return {
      default: defaultTheme,
    };
  }, []);

  return (
    <StyleSheetManager disableVendorPrefixes={appEnv === 'local'}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default AppThemeProvider;
