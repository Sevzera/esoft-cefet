import { DataTypes } from "sequelize";
import { medico } from "./index.js";

let agenda;

function init(database) {
	if (agenda) return agenda;
	agenda = database.define("agenda", {
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
}

export default init;
