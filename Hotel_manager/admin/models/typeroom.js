class typeroom {
  constructor(id, name, type, price, isdelete, status) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isdelete = isdelete;
  }
}
import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";
export default new Schema({
  id: { type: ObjectId },
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 5,
      message: "Tên nhỏ phải lớn hơn 5 ký tự",
    },
  },
  price: { type: Number },
  isdelete: { type: Boolean },
});
