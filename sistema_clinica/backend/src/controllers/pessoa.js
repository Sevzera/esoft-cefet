import { pessoa, endereco } from "../models/index.js";

const controller = {
	insert: async (tuple) => {
		const { nome, email, cep, logradouro, bairro, cidade, estado, telefone } =
			tuple;
		await endereco.create({
			cep,
			logradouro,
			bairro,
			cidade,
			estado
		});
		return await await pessoa.create({
			nome,
			email,
			cep,
			logradouro,
			bairro,
			cidade,
			estado,
			telefone
		});
	},
	select: async (options) => {
		
		return await pessoa.findAll(options);
	},
	update: async (tuple, options) => {
		return await crud.u(pessoa, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(pessoa, options);
	}
};

export default controller;
