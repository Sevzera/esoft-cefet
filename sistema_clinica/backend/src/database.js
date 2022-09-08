import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

/* 
IMPORT MODELS HERE & CREATE VARIABLES
*/
import pessoaModel from "./models/pessoaModel.js";
let pessoa;

let connection;
async function connect() {
	if (!connection) {
		connection = new Sequelize(process.env.DB_URL, {
			dialect: "postgres"
		});
		// DEFINE MODELS HERE
		pessoa = connection.define("pessoa", pessoaModel);
	}
	await connection.sync();
	return connection;
}

/*
EXPORT MODELS HERE
*/
export { pessoa };

export default connect();
