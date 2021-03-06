module.exports = {
  development: {
    client: "sqlite3",
    connection: "./data/resources.db3",
    pool: {
      min: 2,
      max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
