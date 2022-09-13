import { DataTypes } from "sequelize";
import database from "../database.js";
import { medico } from "./index.js";

const agenda = database.define("agenda", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	codigo_medico: {
		type: DataTypes.INTEGER,
		allowNull: false,
		foreignKey: true,
		references: {
			model: medico,
			key: "codigo"
		}
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
