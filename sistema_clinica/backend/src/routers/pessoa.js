import express from "express";
import { pessoa } from "../controllers/index.js";

const router = express.Router();
router.post("/", async (req, res) => {
	const result = await pessoa.insert(req.body);
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await pessoa.select(req.query);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await pessoa.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await pessoa.remove(req.body);
	res.json(result);
});

export default router;
