import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

const database = new Sequelize(
	process.env.DB_URL ||
		"postgres://vympnzaq:o761azpZFIjcEoQeu7AQj2-PsGSM6IWB@jelani.db.elephantsql.com/vympnzaq",
	{
		dialect: process.env.DB_DIALECT || "postgres"
	}
);

export default database;
