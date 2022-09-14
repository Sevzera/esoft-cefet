import { DataTypes } from "sequelize";
import database from "../database.js";

const agenda = await database.define("agenda", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	codigo_medico: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	data: {
		type: DataTypes.STRING,
		allowNull: false
	},
	horario: {
		type: DataTypes.STRING,
		allowNull: false
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: DataTypes.STRING,
	telefone: DataTypes.STRING
});

export default agenda;
