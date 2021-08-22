// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Daniele Portfolio',
        short_name: 'Daniele Portfolio',
        start_url: '/',
        background_color: '#232323',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/img/logo.png',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-client-side-redirect' // Must be last in the list
  ]
}
