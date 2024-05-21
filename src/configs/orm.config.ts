const config = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'] ?? 'localhost',
  username: process.env['POSTGRES_USER'] ?? '',
  password: process.env['POSTGRES_PASSWORD'] ?? '',
  database: process.env['POSTGRES_DB'] ?? '',
  entities: [`src/**/**.entity{.ts,.js}`],
  migrations: [`src/database/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

module.exports = config;
