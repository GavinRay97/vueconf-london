module.exports = {
  client: {
    service: {
      name: "hasura",
      url: "http://localhost:8060/v1/graphql",
    },
    includes: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.graphql'],
    excludes: []
  },
}
