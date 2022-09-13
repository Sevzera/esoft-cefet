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
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	horario: {
		type: DataTypes.TIME,
		allowNull: false
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	telefone: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default agenda;
