require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
    migrations: {
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },
  production: {
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
    migrations: {
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },
};
