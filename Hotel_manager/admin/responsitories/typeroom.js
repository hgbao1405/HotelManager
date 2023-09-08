import db from "../models/index.js";
import { options } from "mongoose/lib/utils.js";
import e, { json } from "express";
import mongoose from "mongoose";

const getAllTypeRoom = async (limit, page) => {
  const listtr = await db.typeroom.find({ isdelete: false }).limit(limit);
  return (listtr ??= {});
};
const addTypeRoom = async ({ name, price }) => {
  await db.typeroom.create({ name, price });
};
const updateTypeRoom = async (id, { price: price, name: name }) => {
  await db.typeroom.findByIdAndUpdate(id, { name: name, price: price });
};
const getTypeRoomById = async (id) => {
  const tr = await db.typeroom.findOne({ _id: id });
  return tr;
};
const deleteTypeRoomById = async (id) => {
  await db.typeroom.findByIdAndUpdate(id, { isdelete: true });
};
export default {
  addTypeRoom,
  getAllTypeRoom,
  updateTypeRoom,
  getTypeRoomById,
  deleteTypeRoomById,
};
