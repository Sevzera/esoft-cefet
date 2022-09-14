import { DataTypes } from "sequelize";
import database from "../database.js";

const endereco = await database.define("endereco", {
	cep: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true
	},
	logradouro: DataTypes.STRING,
	bairro: DataTypes.STRING,
	cidade: DataTypes.STRING,
	estado: DataTypes.STRING
});

export default endereco;
