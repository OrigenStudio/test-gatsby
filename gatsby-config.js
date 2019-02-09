const path = require(`path`);
const theme = require('./src/config/theme').default;


module.exports = {
  siteMetadata: {
    title: 'MTK Space',
    address: {
      line1: 'C/Anselm Clavé 17, Nau 15',
      line2: 'Sant Feliu de Llobregat (08980)',
    },
    email: 'hello@mtkspace.com',
    socialNetworks: [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/mtkspace/',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/mtk_space/',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: theme,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MTK Space',
        short_name: 'MTK',
        start_url: '/',
        background_color: '#1E2424',
        theme_color: '#EC2893',
        display: 'minimal-ui',
        icon: 'src/images/MTK-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/AppLayout.jsx`),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'mtk-space',
        accessToken:
          'MC5XODlLdlJRQUFQUUw1WHRR.77-9Dk_vv73vv71sZ--_vQMQ77-977-977-977-9WW4EJT7vv71hdnIy77-9U--_vXI3C--_vTg',
        lang: '*',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
