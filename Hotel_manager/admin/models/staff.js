import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";
import role from "./role.js";

export default new Schema({
  id: { type: ObjectId },
  identity: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 10,
      message: "CMND hoặc CCCD phải lớn hơn 10 số",
    },
  },

  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 3,
      message: "Tên nhân viên phải lớn hơn 3 ký tự",
    },
  },
  role: {
    type: String,
    enum: ["Nhân viên vệ sinh", "Nhân viên lễ tân", "admin"],
  },
  phone: { type: String },
  dateofbirth: { type: Date },
  isdelete: { type: Boolean },
});
