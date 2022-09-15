import express from "express";
import { enderecoController } from "../controllers/index.js";

const enderecoRouter = express.Router();
enderecoRouter.post("/", async (req, res) => {
	const result = await enderecoController.insert(req.body);
	res.json(result);
});

enderecoRouter.get("/", async (req, res) => {
	const result = await enderecoController.select(req.query);
	res.json(result);
});

enderecoRouter.put("/", async (req, res) => {
	const result = await enderecoController.update(req.body);
	res.json(result);
});

enderecoRouter.delete("/", async (req, res) => {
	const result = await enderecoController.remove(req.body);
	res.json(result);
});

export default enderecoRouter;
