import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "sqlite",
  database: "vuewebagk",
  synchronize: true,
  entities: ["dist/entities/**/*{.js,.ts}"],
  migrations: ["src/migrations/*.{.js,.ts}"],
  cli: {
    migrationsDir: "src/migrations",
  },
};

export default config;
