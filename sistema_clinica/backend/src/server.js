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

	server.use("/api/agenda", routers.agenda);
	server.use("/api/endereco", routers.endereco);
	server.use("/api/funcionario", routers.funcionario);
	server.use("/api/medico", routers.medico);
	server.use("/api/paciente", routers.paciente);
	server.use("/api/pessoa", routers.pessoa);

	const port = process.env.PORT || 1999;
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

server();
