require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Maskinger | High Quality Face Masks`,
    description: `We provide high quality, comfortable face masks with beautiful designs.`,
    image: "/banner.jpg",
    url: "https://maskinger.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: "Products",
            mapping: {
              main_image: `fileNode`,
              model_image: `fileNode`,
              product_front: `fileNode`,
              product_sides: `fileNode`,
              social_image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: "Info",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 1000,
        offset: -80,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
