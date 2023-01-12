export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cevog7sgqg4cnphki85g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_ljd3'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'xG49aHFQEKTqxxbNvQCMIiehoyGIuuDz'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
