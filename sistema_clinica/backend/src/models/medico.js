import { DataTypes } from "sequelize";
import database from "../database.js";

const medico = await database.define("medico", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
		// foreignKey: true,
		// references: {
		// 	model: funcionario,
		// 	key: "codigo"
		// }
	},
	especialidade: {
		type: DataTypes.STRING,
		allowNull: false
	},
	CRM: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
});

export default medico;
