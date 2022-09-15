import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

import database from "./database.js";
import * as routers from "./routers/index.js";

export const server = async () => {
	const server = express();
	// await database.sync({ force: true });
	await database.sync();
	server.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "*");
		res.header(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		next();
	});
	server.use(express.json());

	server.use("/api/agenda", routers.agendaRouter);
	server.use("/api/endereco", routers.enderecoRouter);
	server.use("/api/funcionario", routers.funcionarioRouter);
	server.use("/api/medico", routers.medicoRouter);
	server.use("/api/paciente", routers.pacienteRouter);
	server.use("/api/pessoa", routers.pessoaRouter);

	const port = process.env.PORT || 1999;
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

server();
