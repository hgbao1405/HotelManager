import mongoose, { Schema, ObjectId } from "mongoose";
export default mongoose.model(
  "typeroom",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length >= 3,
        message: "Name of type room must larger than 2 character",
      },
    },
    listRoom: { type: [{ type: ObjectId, ref: "room" }] },
    price: { type: Number },
    isdelete: { type: Boolean, default: false },
  })
);
