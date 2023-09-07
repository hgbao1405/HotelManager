class service {
  constructor(id, name, type, price, isdelete, status) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.isdelete = isdelete;
  }
}
import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";
import billdetail from "./billdetail.js";
export default new Schema({
  id: { type: ObjectId },
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 5,
      message: "Tên dịch vụ phải lớn hơn 5 ký tự",
    },
  },
  price: { type: Number },
  isdelete: { type: Boolean },
});
