import { DataTypes } from "sequelize";
import database from "../database.js";

const endereco = await database.define("endereco", {
	cep: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true
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
	}
});

export default endereco;
