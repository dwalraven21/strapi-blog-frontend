module.exports = {
    client: {
      service: {
        name: 'Strapi-Blog-DB',
        // URL to the GraphQL API
        url: 'https://shielded-headland-61262.herokuapp.com/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }