module.exports = {
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST || '127.0.0.1',
  port: 5432,
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASS,
  database: process.env.POSTGRESQL_NAME,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
