import { billdetailController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", await billdetailController.Index);
router.get("/:id", await billdetailController.Detail);
router.post("/Create", await billdetailController.Create);
router.put("/:id/edit", await billdetailController.Edit);
router.delete("/:id", await billdetailController.Delete);

export default router;
