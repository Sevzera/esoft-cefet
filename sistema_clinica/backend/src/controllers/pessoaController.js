import { pessoa, endereco } from "../models/index.js";

const pessoaController = {
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
		return await pessoa.create({
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
	}
};

export default pessoaController;
