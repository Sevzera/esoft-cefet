import crud from "./utils/crud.js";
import { endereco } from "../models/index.js";

const controller = {
	insert: async (tuple) => {
		return await crud.c(endereco, tuple);
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const enderecos = await crud.r(endereco, {
				attributes: [
					"cep",
					"logradouro",
					"bairro",
					"cidade",
					"estado"
				]
			});
			const query = enderecos.map((endereco) => {
				const { cep, logradouro, bairro, cidade, estado } =
					endereco;
				return { cep, logradouro, bairro, cidade, estado };
			});
			return query;
		}
	},
	update: async (tuple, options) => {
		return await crud.u(endereco, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(endereco, options);
	}
};

export default controller;
