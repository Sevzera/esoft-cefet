import { DataTypes } from "sequelize";

let pessoa;

export function init(database) {
	if (pessoa) return pessoa;
	pessoa = database.define("pessoa", {
		codigo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf: {
			type: DataTypes.STRING(11),
			allowNull: false
		},
		rg: {
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		data_nascimento: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		sexo: {
			type: DataTypes.STRING(1),
			allowNull: false
		}
	});
}
