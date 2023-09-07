import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";
export default mongoose.model(
  "room",
  new Schema({
    id: { type: ObjectId },
    number: { type: Number, required: true },
    typeroom: { type: { type: ObjectId, ref: "typeroom" } },
    imgURL: { type: String },
    status: { type: String, enum: ["Hư hỏng", "Đã dọn", "Chưa dọn"] },
    isdelete: { type: Boolean },
  })
);
