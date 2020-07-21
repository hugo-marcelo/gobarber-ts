module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRESQL_HOST || '127.0.0.1',
    port: 5432,
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASS,
    database: process.env.POSTGRESQL_NAME,
    ssl: process.env.POSTGRESQL_SSL,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    url: process.env.MONGODB_URL,
    useUnifiedTopology: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  },
];
