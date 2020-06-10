const users = [
  {id: 1, name: 'Fagner', email: 'fagner@teste.com.br'},
  {id: 2, name: 'Mario', email: 'mario@teste.com.br'},
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0],
  },
};
