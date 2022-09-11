import { funcionario as controller } from "../controllers/index.js";

import express from "express";
const router = express.Router();
router.get("/", async (req, res) => {
	const result = await controller.select(req.body);
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
