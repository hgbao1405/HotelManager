import express from "express";
import { receptionist } from "../controllers/index.js";

const router = express.Router();

router.post("/check_in", receptionist.check_in);
router.post("/check_out", receptionist.check_out);
router.post("/add_sevice_of_room", receptionist.add_sevice_of_room);
router.post("/make_an_invoice", receptionist.make_an_invoice);
router.get("/prinf_bill", receptionist.prinf_bill);
router.post("/book_room", receptionist.book_room);

export default router;
