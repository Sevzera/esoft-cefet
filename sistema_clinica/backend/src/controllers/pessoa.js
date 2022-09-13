import crud from "./utils/crud.js";
import { pessoa } from "../models/index.js";
import { endereco as endereco_router } from "./index.js";

const controller = {
	insert: async (tuple) => {
		const { nome, email, cep, logradouro, bairro, cidade, estado, telefone } =
			tuple;
		await endereco_router.insert({
			cep,
			logradouro,
			bairro,
			cidade,
			estado
		});
		return await crud.c(pessoa, {
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
		return await crud.r(pessoa, options);
	},
	update: async (tuple, options) => {
		return await crud.u(pessoa, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(pessoa, options);
	}
};

export default controller;
