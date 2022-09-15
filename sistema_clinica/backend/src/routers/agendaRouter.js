import express from "express";
import { agendaController } from "../controllers/index.js";

const agendaRouter = express.Router();
agendaRouter.post("/", async (req, res) => {
	const result = await agendaController.insert(req.body);
	res.json(result);
});

agendaRouter.get("/", async (req, res) => {
	const result = await agendaController.select(req.query);
	res.json(result);
});

agendaRouter.put("/", async (req, res) => {
	const result = await agendaController.update(req.body);
	res.json(result);
});

agendaRouter.delete("/", async (req, res) => {
	const result = await agendaController.remove(req.body);
	res.json(result);
});

export default agendaRouter;
