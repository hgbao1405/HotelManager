import receptionist from "./receptionist.js";
import cleanning from "./cleanning.js";
import express from "express";
const staff = express.Router();

staff.get("/", async (req, res) => {
  res.send("staff area");
});
staff.use("/receptionist", receptionist);
staff.use("/cleaner", cleanning);
export default staff;
