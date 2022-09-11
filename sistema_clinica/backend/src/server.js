import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

import * as routers from "./routers/index.js";

export const server = async () => {
	const server = express();

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
	server.use("/api/medico", routers.medico);

	const port = process.env.PORT || 1999;
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

server();
