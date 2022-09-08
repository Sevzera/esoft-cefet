import express from "express";
import * as control from "../controllers/pessoaController.js";
const router = express.Router();

router.get("/", async (req, res) => {
	const result = await control.select(req.body);
	result ? res.json(result) : res.json("No pessoas found");
});

router.post("/", async (req, res) => {
	const result = await control.insert(req.body);
	result ? res.json(result) : res.json("Error creating pessoa");
});

router.put("/", async (req, res) => {
	const result = await control.update(req.body);
	result ? res.json(result) : res.json("Error creating pessoa");
});

router.delete("/", async (req, res) => {
	const result = await control.remove(req.body);
	result ? res.json(result) : res.json("Error creating pessoa");
});

export default router;
