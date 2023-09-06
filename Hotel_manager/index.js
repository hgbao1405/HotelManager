import express from "express";
import * as dotenv from "dotenv";
import admin from "./admin/routers/index.js";
import connect from "./database/connection.js";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;
// Connection URL. This is where your mongodb server is running.
var url = process.env.MongoURL;

app.use("/admin", admin);

app.get("/", (req, res) => {
  res.send("this is homepage");
});

app.listen(port, async () => {
  // Use connect method to connect to the Server
  connect();
  console.log("listening on port: http://localhost:" + port);
});
