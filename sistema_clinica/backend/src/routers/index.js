export * as pessoa from "./pessoa.js";
export * as paciente from "./paciente.js";
export * as funcionario from "./funcionario.js";
export * as medico from "./medico.js";
export * as agenda from "./agenda.js";
export * as endereco from "./endereco.js";

import express from "express";
const router = express.Router();
router.get("/", async (req, res) => {
	const result = await controller.select(req.query);
	res.json(result);
});

router.post("/", async (req, res) => {
	const result = await controller.insert(req.body);
	res.json(result);
});

router.put("/", async (req, res) => {
	const result = await controller.update(req.body);
	res.json(result);
});

router.delete("/", async (req, res) => {
	const result = await controller.remove(req.body);
	res.json(result);
});

export default router;
