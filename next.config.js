const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  // You can set different URLs for different environments here
  const env = {
    GRAPHQL_API_URL: (() => {
      if (isDev) return 'https://rickandmortyapi.com/graphql/';
      if (isProd) {
        return 'https://rickandmortyapi.com/graphql/';
      }
      if (isStaging) return 'https://rickandmortyapi.com/graphql/';
      return 'GRAPHQL_API_URL:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
  };

  // You can use serverRuntimeConfig to set variable values such as API keys and secrets
  // For details: https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  const serverRuntimeConfig = {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  };

  const publicRuntimeConfig = {
    // Will be available on both server and client
    defaultTheme: 'light',
  };

  return withMDX({
    env,
    serverRuntimeConfig,
    publicRuntimeConfig,
    images: {
      domains: ['rickandmortyapi.com'],
    },
    pageExtensions: ['js', 'jsx', 'mdx'],
  });
};
