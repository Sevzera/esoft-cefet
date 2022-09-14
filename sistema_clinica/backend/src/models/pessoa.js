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
	email: DataTypes.STRING,
	cep: {
		type: DataTypes.STRING,
		allowNull: false
	},
	logradouro: DataTypes.STRING,
	bairro: DataTypes.STRING,
	cidade: DataTypes.STRING,
	estado: DataTypes.STRING,
	telefone: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default pessoa;
