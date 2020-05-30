const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: 'Kael | The best discord fun bot',
    description: 'The best discord fun bot.',
    author: 'Kaeltec Team',
    siteUrl: 'https://kaelbot.xyz',
    social: {
      twitter: {
        username: 'BotKael',
        creator: '@BotKael',
        url: 'https://twitter.com/BotKael',
      },
      github: {
        username: 'Kaeltec',
        url: 'https://github.com/Kaeltec',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: resolve(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://kaeltec.fun',
      },
    },
    {
      resolve: 'gatsby-plugin-google-adsense',
      options: {
        publisherId: 'ca-pub-5563002632241077',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-166754587-2',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#fff',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kael the best discord fun bot',
        short_name: 'kaeltec.fun',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png',
        background_color: '#f23859',
        theme_color: '#f23859',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map(edge => ({
            url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
          }));
        },
      },
    },
  ],
};
