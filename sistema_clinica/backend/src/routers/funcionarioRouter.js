import express from "express";
import { funcionarioController } from "../controllers/index.js";

const funcionarioRouter = express.Router();
funcionarioRouter.post("/", async (req, res) => {
	const result = await funcionarioController.insert(req.body);
	res.json(result);
});

funcionarioRouter.get("/", async (req, res) => {
	const result = await funcionarioController.select(req.query);
	res.json(result);
});

funcionarioRouter.put("/", async (req, res) => {
	const result = await funcionarioController.update(req.body);
	res.json(result);
});

funcionarioRouter.delete("/", async (req, res) => {
	const result = await funcionarioController.remove(req.body);
	res.json(result);
});

export default funcionarioRouter;
