import { staffController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", await staffController.Index);
router.get("/:id", await staffController.Detail);
router.post("/Create", await staffController.Create);
router.put("/:id/edit", await staffController.Edit);
router.delete("/:id", await staffController.Delete);

export default router;
