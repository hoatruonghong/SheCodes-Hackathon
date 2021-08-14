const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      database : 'HP'
    }
  });
  module.exports = knex;
