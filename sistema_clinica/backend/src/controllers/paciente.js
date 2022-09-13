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
			const query = await crud.r(paciente, {
				attributes: ["tipo_sanguineo", "peso", "altura"],
				include: [
					{
						model: pessoa,
						as: "pessoa",
						attributes: ["nome"]
					}
				]
			});
			// CORRIGIR
			const qry = query.map((item) => {
				const { tipo_sanguineo, peso, altura, pessoa } = item;
				const { nome } = pessoa;
				return { tipo_sanguineo, peso, altura, nome };
			});
		} else {
			return await crud.r(paciente);
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
