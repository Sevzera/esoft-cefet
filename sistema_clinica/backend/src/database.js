import dotenv from "dotenv";
import Sequelize from "sequelize";
import * as models from "./models/index.js";
dotenv.config();

let database;
function init() {
	if (database) return database;
	database = new Sequelize(process.env.DB_URL, {
		dialect: DB_DIALECT
	});
	models.forEach((model) => model.init(database));
}

export default database;
