import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

import database from "./database.js";
import queryRouter from "./routers/index.js";

export const server = async () => {
	const server = express();	
	database.sync();
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

	server.use("/api/agenda", queryRouter);
	server.use("/api/endereco", queryRouter);
	server.use("/api/funcionario", queryRouter);
	server.use("/api/medico", queryRouter);
	server.use("/api/paciente", queryRouter);
	server.use("/api/pessoa", queryRouter);

	const port = process.env.PORT || 1999;
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

server();
