module.exports = {
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST || '127.0.0.1',
  port: 5432,
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASS,
  database: process.env.POSTGRESQL_NAME,
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
