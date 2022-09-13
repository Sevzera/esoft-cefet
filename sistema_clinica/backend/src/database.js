import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

const database = new Sequelize(process.env.DB_URL, {
	dialect: process.env.DB_DIALECT
});

export default database;
