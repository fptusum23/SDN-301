import * as express from "express";
import * as bodyParser from "body-parser";

import * as logger from "morgan";

// import expressValidator = require("express-validator");

import api from "./routers";
import * as cors from "cors";

import * as path from "path";
import { loggerMiddleware } from "./middlewares";
import { config } from "./config";
import mongoose from "mongoose";

console.log("Starting server with at " + process.pid + " on port " + config.server.port);

const app = express();
app.use(
  logger("common", {
    skip: function (req, res) {
      if (req.url == "/_ah/health") {
        return true;
      } else {
        return false;
      }
    },
  })
);

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/policy", function (req, res) {
  res.render("policy");
});

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
  })
);


if (config.server.logger.length) {
  app.use(loggerMiddleware.run(config.server.logger));
}

app.use(cors());

app.use("/api", api);
app.set("port", config.server.port);
mongoose.set('strictQuery', true);
mongoose.connect(config.database.mongo)
  .then(() => {
    console.log('Connected to DB');
    app
      .get("/", function (request, response) {
        response.send("App is running");
      })
      .listen(app.get("port"), function () {

        console.log(
          `${config.server.name} started at ${config.server.protocol}://${config.server.host}:${app.get("port")}`
        );
      });

  })
  .catch(err => {
    console.log(err)
  })

