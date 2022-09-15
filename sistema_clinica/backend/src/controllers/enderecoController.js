import { endereco } from "../models/index.js";

const enderecoController = {
	insert: async (tuple) => {
		return await endereco.create(tuple);
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const enderecos = await endereco.findAll({
				attributes: ["cep", "logradouro", "bairro", "cidade", "estado"]
			});
			const query = enderecos.map((endereco) => {
				const { cep, logradouro, bairro, cidade, estado } = endereco;
				return { cep, logradouro, bairro, cidade, estado };
			});
			return query;
		} else if (spec === "autopr") {
			const { cep } = options;
			const enderecos = await endereco.findAll({
				attributes: ["logradouro", "bairro", "cidade", "estado"],
				where: {
					cep: cep
				}
			});
			const query = enderecos.map((endereco) => {
				const { logradouro, bairro, cidade, estado } = endereco;
				return { logradouro, bairro, cidade, estado };
			});
			return query;
		}
	}
};

export default enderecoController;
