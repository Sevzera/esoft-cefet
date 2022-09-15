import express from "express";
import { pacienteController } from "../controllers/index.js";

const pacienteRouter = express.Router();
pacienteRouter.post("/", async (req, res) => {
	const result = await pacienteController.insert(req.body);
	res.json(result);
});

pacienteRouter.get("/", async (req, res) => {
	const result = await pacienteController.select(req.query);
	res.json(result);
});

pacienteRouter.put("/", async (req, res) => {
	const result = await pacienteController.update(req.body);
	res.json(result);
});

pacienteRouter.delete("/", async (req, res) => {
	const result = await pacienteController.remove(req.body);
	res.json(result);
});

export default pacienteRouter;
