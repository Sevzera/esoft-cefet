import { DataTypes } from "sequelize";
import database from "../database.js";

const model = database.define("pessoa", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
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
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
		allowNull: false
	},
	cep: DataTypes.STRING,

	logradouro: DataTypes.STRING,

	bairro: DataTypes.STRING,

	cidade: DataTypes.STRING,

	estado: DataTypes.STRING
});

export default model;
