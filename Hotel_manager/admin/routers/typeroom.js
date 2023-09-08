import { typeroomController } from "../controllers/index.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  typeroomController.Index(req, res);
});
router.get("/GetAllTypeRoom", async (req, res) => {
  await typeroomController.GetAllTypeRoom(req, res);
});
router.get("/:id", async (req, res) => {
  await typeroomController.Detail(req, res);
});
router.post("/Create", async (req, res) => {
  res.send(JSON.stringify(await typeroomController.Create(req, res)));
});
router.put("/:id/edit", async (req, res) => {
  await typeroomController.Edit(req, res);
});
router.delete("/:id", async (req, res) => {
  typeroomController.Delete(req, res);
});

export default router;
