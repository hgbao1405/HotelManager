import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";
import typeroom from "./typeroom.js";
export default new Schema({
  id: { type: ObjectId },
  number: { type: Number, required: true },
  type: { type: typeroom },
  imgURL: { type: String },
  status: { type: String, enum: ["Hư hỏng", "Đã dọn", "Chưa dọn"] },
  isdelete: { type: Boolean },
});
