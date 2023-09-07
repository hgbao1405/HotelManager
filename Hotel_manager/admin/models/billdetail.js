import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "billdetail",
  new Schema({
    id: ObjectId,
    name_sevice: {
      //phòng hoặc nước uống, đồ ăn
      type: String,
      required: true,
    },
    price: Long,
    isdelete: Boolean,
  })
);
