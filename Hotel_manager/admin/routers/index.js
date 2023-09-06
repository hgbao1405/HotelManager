import bill from "./bill.js";
import room from "./room.js";
import typeroom from "./typeroom.js";
import billdetail from "./billdetail.js";
import role from "./role.js";
import service from "./service.js";
import staff from "./staff.js";
import express from "express";
const admin = express.Router();

admin.get("/", async (req, res) => {
  res.send("admin area");
});
admin.use("/bill", bill);
admin.use("/room", room);
admin.use("/typeroom", typeroom);
admin.use("/billdetail", billdetail);
admin.use("/role", role);
admin.use("/service", service);
admin.use("/staff", staff);

export default admin;
