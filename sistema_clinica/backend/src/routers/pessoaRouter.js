import express from "express";
import { pessoaController } from "../controllers/index.js";

const pessoaRouter = express.Router();
pessoaRouter.post("/", async (req, res) => {
	const result = await pessoaController.insert(req.body);
	res.json(result);
});

pessoaRouter.get("/", async (req, res) => {
	const result = await pessoaController.select(req.query);
	res.json(result);
});

pessoaRouter.put("/", async (req, res) => {
	const result = await pessoaController.update(req.body);
	res.json(result);
});

pessoaRouter.delete("/", async (req, res) => {
	const result = await pessoaController.remove(req.body);
	res.json(result);
});

export default pessoaRouter;
