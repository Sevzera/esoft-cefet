import dotenv from "dotenv";
import Sequelize from "sequelize";
import * as models from "./models/index.js";
dotenv.config();

let database;
function init() {
	database = new Sequelize(process.env.DB_URL, {
		dialect: process.env.DB_DIALECT
	});
	for (const model of models) {
		model.init(database);
	}
}

export default function connect() {
	if (database) return database;
	init();
	return database;
}
