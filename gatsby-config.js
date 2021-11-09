module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `ctrbkh4wxhpq`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: `6tbnUpSQJQWPmTbupgEzVKNcmd9LlbeZ7SnjU6bspOo`,
            },
          },

    ]
}