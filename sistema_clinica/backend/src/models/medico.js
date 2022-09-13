import { DataTypes } from "sequelize";
import database from "../database.js";

const medico = await database.define("medico", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	especialidade: {
		type: DataTypes.STRING,
		allowNull: false
	},
	crm: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default medico;
