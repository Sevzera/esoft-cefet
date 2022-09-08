import { Sequelize } from "sequelize";

const Pessoa = {
	codigo: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	nome: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
	telefone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cep: Sequelize.STRING,

	logradouro: Sequelize.STRING,

	bairro: Sequelize.STRING,

	cidade: Sequelize.STRING,

	estado: Sequelize.STRING
};

export default Pessoa;
