import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "billdetail",
  new Schema({
    id: ObjectId,
    name_sevice: {
      //nước uống, đồ ăn
      type: String,
      required: true,
    },
    dateAdd: { type: Date, required: true, default: Date.now() },
    price: Long,
    isdelete: Boolean,
  })
);
