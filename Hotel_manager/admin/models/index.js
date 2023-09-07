import mongoose from "mongoose";
import bill from "./bill.js";
import staff from "./staff.js";
import room from "./room.js";
import staff from "./staff.js";

const modelbill = mongoose.model("bill", bill);
const modelrole = mongoose.model("staff", staff);
const modelroom = mongoose.model("room", room);
const modelstaff = mongoose.model("staff", staff);

export { modelbill, modelrole, modelroom, modelstaff };
