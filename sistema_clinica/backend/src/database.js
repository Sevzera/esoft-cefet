import dotenv from "dotenv";
import Sequelize from "sequelize";
import * as models from "./models/index.js";
dotenv.config();

let connection;
async function connect() {
	if (!connection) {
		connection = new Sequelize(process.env.DB_URL, {
			dialect: process.env.DB_DIALECT
		});
		for (const i in models) {
			models[i].init(connection);
		}
	}
	return connection;
}

export default connect();
