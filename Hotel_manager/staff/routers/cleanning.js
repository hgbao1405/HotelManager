import express from "express";
import { cleanning } from "../controllers/index.js";

const router = express.Router();
router.get("/", cleanning.Get_clean_room);
router.get("/id", cleanning.Reported_cleaned_room_id);

export default router;
