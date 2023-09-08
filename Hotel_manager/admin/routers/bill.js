import { billController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  billController.Index(req, res);
});

router.get("/Create", await billController.Create);
router.get("/:id", await billController.Detail);
router.post("/Create", await billController.Create);
router.put("/:id/edit", await billController.Edit);
router.delete("/:id", await billController.Delete);

export default router;
