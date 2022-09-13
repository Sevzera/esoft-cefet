import crud from "./utils/crud.js";
import { funcionario, pessoa, medico } from "../models/index.js";
import { pessoa as pessoa_router } from "./index.js";

const controller = {
	insert: async (tuple) => {
		const { data_contrato, salario, senha_hash } = tuple;
		const common = await pessoa_router.insert(tuple);
		const codigo = common.codigo;
		return await crud.c(funcionario, {
			codigo,
			data_contrato,
			salario,
			senha_hash
		});
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const funcionarios = await crud.r(funcionario, {
				attributes: ["salario"],
				include: [
					{
						model: pessoa,
						as: "pessoa",
						attributes: ["nome", "email", "telefone"]
					},
					{
						model: medico,
						as: "medico",
						attributes: ["crm", "especialidade"]
					}
				]
			});
			const query = funcionarios.map((funcionario) => {
				const { salario, pessoa, medico } = funcionario;
				const { nome, email, telefone } = pessoa;
				if (medico) {
					const { crm, especialidade } = medico;
					return { nome, salario, email, telefone, crm, especialidade };
				}
				return { nome, salario, email, telefone };
			});
			return query;
		}
	},

	update: async (tuple, options) => {
		return await crud.u(funcionario, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(funcionario, options);
	}
};

export default controller;
