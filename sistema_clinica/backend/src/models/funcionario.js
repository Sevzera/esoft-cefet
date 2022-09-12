import { DataTypes } from "sequelize";
import database from "../database.js";
import { pessoa } from "./index.js";

const model = database.define("funcionario", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		foreignKey: true,
		references: {
			model: pessoa,
			key: "codigo"
		}
	},
	data_contrato: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	salario: {
		type: DataTypes.REAL,
		allowNull: false
	},
	senha_hash: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default model;
