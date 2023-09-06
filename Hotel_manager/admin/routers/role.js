import { roleController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", await roleController.Index);
router.get("/:id", await roleController.Detail);
router.post("/Create", await roleController.Create);
router.put("/:id/edit", await roleController.Edit);
router.delete("/:id", await roleController.Delete);

export default router;
