import express from "express";
import { endereco } from "../controllers/index.js";

const router = express.Router();
router.post("/", async (req, res) => {
	const result = await endereco.insert(req.body);
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await endereco.select(req.query);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await endereco.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await endereco.remove(req.body);
	res.json(result);
});

export default router;
