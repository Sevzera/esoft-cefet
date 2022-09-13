import express from "express";
import { funcionario } from "../controllers/index.js";

const router = express.Router();
router.post("/", async (req, res) => {
	const result = await funcionario.insert(req.body);
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await funcionario.select(req.query);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await funcionario.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await funcionario.remove(req.body);
	res.json(result);
});

export default router;
