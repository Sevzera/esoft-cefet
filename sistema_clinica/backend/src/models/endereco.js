import { DataTypes } from "sequelize";

let endereco;

export function init(database) {
	if (endereco) return endereco;
	endereco = database.define("endereco", {
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
			type: DataTypes.STRING(2),
			allowNull: false
		}
	});
}
