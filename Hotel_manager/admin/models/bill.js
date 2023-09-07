import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";
import billdetail from "./billdetail.js";
export default new Schema({
  id: { type: ObjectId },
  idCustomer: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 10,
      message: "CMND hoặc CCCD phải lớn hơn 10 số",
    },
  },
  nameCustomer: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 10,
      message: "Tên khách hàng phải lớn hơn 3 ký tự",
    },
  },
  billdetail: {
    type: [billdetail],
  },
  totalprice: { type: Long },
  isdelete: { type: Boolean },
  datetime: { type: Date },
});
