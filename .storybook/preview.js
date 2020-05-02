import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/styles/global';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../src/styles/theme';

// Add more themes to array if there is more than one
const themes = [{ name: 'default', ...theme }];
addDecorator(withThemesProvider(themes));

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js|mdx
configure([require.context('../src', true, /\.stories\.(js|mdx)$/)], module);
