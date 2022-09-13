import express from "express";
import { medico } from "../controllers/index.js";

const router = express.Router();
router.post("/", async (req, res) => {
	const result = await medico.insert(req.body);
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await medico.select(req.query);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await medico.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await medico.remove(req.body);
	res.json(result);
});

export default router;
