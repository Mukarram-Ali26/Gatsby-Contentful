/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8ns48pwpsg5n`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "a9IaqmbK2DgxkHJP0hcWPPbbmXv2HsiYg3LjOMXgLPA",
      },
    },
    `gatsby-plugin-material-ui`,
    `@contentful/gatsby-transformer-contentful-richtext`
  ],
}
