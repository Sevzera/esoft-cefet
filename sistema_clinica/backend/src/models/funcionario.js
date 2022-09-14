import { DataTypes } from "sequelize";
import database from "../database.js";

const funcionario = await database.define("funcionario", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	data_contrato: DataTypes.STRING,
	salario: DataTypes.REAL,
	senha_hash: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default funcionario;
