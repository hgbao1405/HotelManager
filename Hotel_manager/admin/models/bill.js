import { Double, Long, ObjectId } from "mongodb";
import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "bill",
  new Schema({
    id: { type: ObjectId },
    idCustomer: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 10,
        message: "CMND hoặc CCCD phải lớn hơn 10 số",
      },
    },
    room: {
      type: { type: ObjectId, ref: "room" },
    },
    nameCustomer: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Tên khách hàng phải lớn hơn 3 ký tự",
      },
    },
    billdetail: {
      type: [{ type: ObjectId, ref: "billdetail" }],
    },
    totalprice: { type: Long },
    isdelete: { type: Boolean },
    datetimeCheckin: { type: Date, default: Date.now }, //Ngày tạo
    datetime: { type: Date }, //Ngày thanh toán
  })
);
