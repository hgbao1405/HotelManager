import mongoose, { Schema, ObjectId } from "mongoose";
export default mongoose.model(
  "service",
  new Schema({
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
  })
);
