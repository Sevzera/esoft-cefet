import { DataTypes } from "sequelize";
import database from "../database.js";

const paciente = await database.define("paciente", {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	tipo_sanguineo: DataTypes.STRING,
	peso: DataTypes.REAL,
	altura: DataTypes.REAL
});

export default paciente;
