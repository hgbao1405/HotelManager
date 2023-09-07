import { Double, Long, ObjectId } from "mongodb";
import { Schema, ObjectId } from "mongoose";

export default new Schema({
  id: ObjectId,
  name_sevice: {
    //phòng hoặc nước uống, đồ ăn
    type: String,
    required: true,
  },
  price: Long,
  isdelete: Boolean,
});
