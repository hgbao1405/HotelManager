import express from "express";
import { cleanning } from "../controllers/index.js";

const router = express.Router();
//http://localhost:3030/staff/cleaner
router.get("/", cleanning.Get_clean_room);

//http://localhost:3030/staff/cleaner/1
router.get("/:id", cleanning.Reported_cleaned_room_id);

//http://localhost:3030/staff/cleaner/1/Tủ%20lạnh
router.get("/:id/:bd", cleanning.Reported_broken_device_in_room);

export default router;
