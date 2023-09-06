import { serviceController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", await serviceController.Index);
router.get("/:id", await serviceController.Detail);
router.post("/Create", await serviceController.Create);
router.put("/:id/edit", await serviceController.Edit);
router.delete("/:id", await serviceController.Delete);

export default router;
