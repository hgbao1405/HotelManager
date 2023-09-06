import { roomController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", await roomController.Index);
router.get("/:id", await roomController.Detail);
router.post("/Create", await roomController.Create);
router.put("/edit/:id", await roomController.Edit);
router.delete("/:id", await roomController.Delete);

export default router;
