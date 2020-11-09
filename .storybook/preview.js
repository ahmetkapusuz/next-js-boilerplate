import React from 'react';
import { configure } from '@storybook/react';
import { GlobalStyle } from '../src/styles/global';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

// automatically import all files ending in *.stories.js|mdx
configure([require.context('../src', true, /\.stories\.(js|mdx)$/)], module);