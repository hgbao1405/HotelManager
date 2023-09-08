import { json } from "express";
import typeroom from "../responsitories/typeroom.js";
const Index = async (req, res) => {
  res.send("index page type room");
};
const GetAllTypeRoom = async (req, res) => {
  try {
    const tr = await typeroom.getAllTypeRoom();
    if (tr.length > 0)
      res.status(200).json({
        message: "Get all type room success",
        data: tr,
      });
    else
      res.status(400).json({
        message: "Cannot find type room",
      });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
const Detail = async (req, res) => {
  const id = req.params.id;
  try {
    const tr = await typeroom.getTypeRoomById(id);
    if (tr != null) {
      console.log(JSON.stringify(tr));
      res.status(200).json({
        message: "Get type room success",
        data: tr,
      });
    } else {
      res.status(404).json({
        message: "Type room not found or wrong id",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const Create = async (req, res) => {
  const id = req.params.id;
  try {
    typeroom.f;
    typeroom.addTypeRoom(req.body);
    res.status(200).json({
      message: "Create type room success",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
  res.send(JSON.stringify());
};
const Edit = async (req, res) => {
  const id = req.params.id;
  try {
    const tr1 = await typeroom.getTypeRoomById(id);
    if (tr1 != null) {
      await typeroom.updateTypeRoom(tr1.id, req.body);
      res.status(200).json({
        message: "Update type roon success",
      });
    } else {
      res.status(404).json({
        message: "Type room not found or wrong id",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
//chưa làm
const Delete = async (req, res) => {
  const id = req.params.id;
  try {
    const tr1 = await typeroom.getTypeRoomById(id);
    if (tr1 != null) {
      console.log(tr1);
      await typeroom.deleteTypeRoomById(tr1._id);

      res.status(200).json({
        message: "Delete type roon success",
      });
    } else {
      res.status(404).json({
        message: "Type room not found or wrong id",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export default { Index, GetAllTypeRoom, Detail, Create, Edit, Delete };
