require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
require("dotenv")

module.exports = {
  siteMetadata: {
    title: `Nyoman Eka Swardita`,
    description:
      "Article of Informatics Student | made by Nyoman Eka Swardita (Frontend Developer Tupai Tech)",
    author: `Nyoman Eka`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
  ],
}
