import express from "express";
import {
} from "../Controller/tembakauController.js";
import { createTembakau, deleteTembakau, getTembakau, getTembakauById, updateTembakau } from "../Controller/tembakauController.js";

const router = express.Router();

router.get("/", getTembakau);
router.get("/find", getTembakauById);
router.post("/create", createTembakau);
router.put("/update/:id", updateTembakau);
router.delete("/delete", deleteTembakau);

export default router;
