import { typeroomController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", await typeroomController.Index);
router.get("/:id", await typeroomController.Detail);
router.post("/Create", await typeroomController.Create);
router.put("/:id/edit", await typeroomController.Edit);
router.delete("/:id", await typeroomController.Delete);

export default router;
