import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";

const app = express();

app.use(express.json());

createConnection()
  .then(async (connection) => {
    connection.runMigrations();
    console.log("Applying migration database...");
    app.listen(8081, () => {
      console.log("Server listen at http://localhost:8081...");
    });
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // // await connection.manager.save(user);
    // await user.save();
    // console.log("Saved a new user with id: " + user.Id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
