import express from "express";
import { medicoController } from "../controllers/index.js";

const medicoRouter = express.Router();
medicoRouter.post("/", async (req, res) => {
	const result = await medicoController.insert(req.body);
	res.json(result);
});

medicoRouter.get("/", async (req, res) => {
	const result = await medicoController.select(req.query);
	res.json(result);
});

medicoRouter.put("/", async (req, res) => {
	const result = await medicoController.update(req.body);
	res.json(result);
});

medicoRouter.delete("/", async (req, res) => {
	const result = await medicoController.remove(req.body);
	res.json(result);
});

export default medicoRouter;
