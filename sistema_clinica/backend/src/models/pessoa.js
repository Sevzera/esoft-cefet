import { DataTypes } from "sequelize";
import database from "../database.js";

const pessoa = await database.define("pessoa", {
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
	cep: {
		type: DataTypes.STRING,
		allowNull: false
	},
	logradouro: {
		type: DataTypes.STRING,
		allowNull: false
	},
	bairro: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cidade: {
		type: DataTypes.STRING,
		allowNull: false
	},
	estado: {
		type: DataTypes.STRING,
		allowNull: false
	},
	telefone: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default pessoa;
