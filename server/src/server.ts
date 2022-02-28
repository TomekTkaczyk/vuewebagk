import http from "http";
import express, { Express } from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/user";
// import morgan from "morgan";
// import routes from "./routes";

// dbInit();
// createDatabase(conn, process.env.TYPEORM_DATABASE!);

createConnection()
  .then(async (connection) => {
    // eslint-disable-next-line no-console
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.login = "Saw";
    user.passwordHash = "pole2";
    // eslint-disable-next-line no-console
    console.log("Save record...");
    await connection.manager.save(user);
    // eslint-disable-next-line no-console
    console.log("Save record...");
    // eslint-disable-next-line no-console
    console.log(`Saved a new user with id: ${user.Id}`);

    // eslint-disable-next-line no-console
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    // eslint-disable-next-line no-console
    console.log("Loaded users: ", users);

    // eslint-disable-next-line no-console
    console.log("Here you can setup and run express/koa/any other framework.");
  })
  // eslint-disable-next-line no-console
  .catch((error) => console.log(error));

const router: Express = express();

// router.use(morgan("dev"));
// router.use(express.urlencoded({ extended: false }));
// router.use(express.json());
// // eslint-disable-next-line consistent-return
// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "origin, X-Requested-With,Content-Type,Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
//     return res.status(200).json({});
//   }
//   next();
// });
// router.use("/api/v01", routes);

const server = http.createServer(router);

server.listen(8081, () => {
  // eslint-disable-next-line no-console
  console.log("Example typescript listening at...");
});
