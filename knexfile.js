require('dotenv').config();

module.exports = { 
  development: {
    client: 'pg',
    connection: { 
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },

    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
}