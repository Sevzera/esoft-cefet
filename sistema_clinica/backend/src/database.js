import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

const database = new Sequelize(
	"postgres://vympnzaq:o761azpZFIjcEoQeu7AQj2-PsGSM6IWB@jelani.db.elephantsql.com/vympnzaq",
	{
		dialect: "postgres"
	}
);

export default database;
