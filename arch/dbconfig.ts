// import dotenv from "dotenv";
// import { ConnectionOptions, createConnection } from "typeorm";
// import { createDatabase } from "typeorm-extension";

// dotenv.config();

// async function dbInit() {
//   try {
//     if (
//       process.env.TYPEORM_CONNECTION !== "mariadb" &&
//       process.env.TYPEORM_CONNECTION !== "mysql"
//     )
//       throw new Error("bad database type");

//     const connectionOptions: ConnectionOptions = {
//       type: process.env.TYPEORM_CONNECTION,
//       host: process.env.TYPEORM_HOST,
//       username: process.env.TYPEORM_USERNAME,
//       password: process.env.TYPEORM_PASSWORD,
//       database: process.env.TYPEORM_DATABASE,
//     };

//     await createDatabase({ ifNotExist: true }, connectionOptions);

//     await createConnection({
//       type: process.env.TYPEORM_CONNECTION,
//       host: process.env.TYPEORM_HOST,
//       username: process.env.TYPEORM_USERNAME,
//       password: process.env.TYPEORM_PASSWORD,
//       database: process.env.TYPEORM_DATABASE,
//       entities: ["src/entities/**/*.ts"],
//       synchronize: false,
//       migrations: ["src/migrations/*.ts"],
//       cli: { migrationsDir: "src/migrations" },
//     });
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.log(error);
//     throw error;
//   }
// }

// export { dbInit };
