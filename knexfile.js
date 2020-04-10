module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://uica:uica@localhost:5555/uica-app",
    searchPath: ["knex", "public"],
    migrations: {
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },
  production: {
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
};
