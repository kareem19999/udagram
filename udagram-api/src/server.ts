import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

(async () => {
  dotenv.config();
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
  try {
    await sequelize.addModels(V0_FEED_MODELS);

  
    console.log("Added feed model");
  } catch (error) {
    console.log("Unable to add Feed model")
  }
  try {
    await sequelize.addModels(V0_USER_MODELS);

  
    console.log("Added user model");
  } catch (error) {
    console.log("Unable to add user model")
  }
  try {
    await sequelize.sync();
    console.log("Synced");
  } catch (error) {
    console.log("Unable to sync")
  }
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());

  app.use(cors());

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${process.env.URL}`);
    console.log(`press CTRL+C to stop server`);
  });

})();

