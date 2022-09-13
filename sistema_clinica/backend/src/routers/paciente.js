import express from "express";
import { paciente as controller } from "../models/index.js";

const router = express.Router();
router.get("/", async (req, res) => {
	const result = await controller.select(req.query);
	res.json(result);
});

router.post("/", async (req, res) => {
	const result = await controller.insert(req.body);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await controller.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await controller.remove(req.body);
	res.json(result);
});

export default router;
