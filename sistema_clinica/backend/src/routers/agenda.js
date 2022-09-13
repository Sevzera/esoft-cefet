import express from "express";
import { agenda } from "../controllers/index.js";

const router = express.Router();
router.post("/", async (req, res) => {
	const result = await agenda.insert(req.body);
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await agenda.select(req.query);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await agenda.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await agenda.remove(req.body);
	res.json(result);
});

export default router;
