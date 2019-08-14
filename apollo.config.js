module.exports = {
  client: {
    includes: ['{pages,components}/**/*.tsx'],
    name: 'Shotgun client',
    service: {
      name: 'Shotgun staging',
      url: 'http://localhost:4000/graphql/graphiql',
    },
  },
};
