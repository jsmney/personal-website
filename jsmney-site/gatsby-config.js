module.exports = {
  siteMetadata: {
    title: `Jasmine Wang Full Stack Developer`,
    description: `Jasmine Wang is a full stack software engineer based in Chicago, Illinois. Specializes in React, Redux, Node, Express, Sequelize, PostgreSQL. Design experience in Adobe Creative Cloud (InDesign, Illustrator, Photoshop, XD)`,
    author: `@jsmney`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`, // `gatsby-source-filesystem`
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jsmney-logo.png`, // This path is relative to the root of the site.
        path: `./src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
