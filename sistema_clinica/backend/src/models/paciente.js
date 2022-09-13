import { DataTypes } from "sequelize";
import database from "../database.js";
import { pessoa } from "./index.js";

const paciente = database.define("paciente", {
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
	tipo_sanguineo: {
		type: DataTypes.STRING(2),
		allowNull: false
	},
	peso: DataTypes.STRING,
	altura: DataTypes.STRING
});

export default paciente;
