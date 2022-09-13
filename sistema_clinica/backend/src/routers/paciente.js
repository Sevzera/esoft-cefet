import express from "express";
import { paciente } from "../controllers/index.js";

const router = express.Router();
router.post("/", async (req, res) => {
	const result = await paciente.insert(req.body);
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await paciente.select(req.query);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await paciente.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await paciente.remove(req.body);
	res.json(result);
});

export default router;
