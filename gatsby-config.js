module.exports = {
  siteMetadata: {
    title: 'MTK Space',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MTK Space',
        short_name: 'MTK',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
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
  ],
};
