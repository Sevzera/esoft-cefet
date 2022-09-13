import crud from "./utils/crud.js";
import { paciente, pessoa } from "../models/index.js";
import { pessoa as pessoa_router } from "./index.js";

const controller = {
	insert: async (tuple) => {
		const { tipo_sanguineo, peso, altura } = tuple;
		const common = await pessoa_router.insert(tuple);
		const codigo = common.codigo;
		return await crud.c(paciente, {
			codigo,
			tipo_sanguineo,
			peso,
			altura
		});
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const pacientes = await crud.r(paciente, {
				attributes: ["tipo_sanguineo"],
				include: [
					{
						model: pessoa,
						as: "pessoa",
						attributes: ["nome", "email", "telefone"]
					}
				]
			});
			const query = pacientes.map((paciente) => {
				const { tipo_sanguineo, pessoa } = paciente;
				const { nome, email, telefone } = pessoa;
				return { nome, tipo_sanguineo, email, telefone };
			});
			return query;
		}
	},
	update: async (tuple, options) => {
		return await crud.u(paciente, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(paciente, options);
	}
};

export default controller;
