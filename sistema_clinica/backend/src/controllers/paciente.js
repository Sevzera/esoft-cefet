import crud from "./utils/crud.js";
import { paciente } from "../models/index.js";
import { pessoa } from "./index.js";

const controller = {
	insert: async (tuple) => {
		const { tipo_sanguineo, peso, altura } = tuple;
		const common = await pessoa.insert(tuple);
		const codigo = common.codigo;
		return await crud.c(paciente, {
			codigo,
			tipo_sanguineo,
			peso,
			altura
		});
	},
	select: async (options) => {
		return await crud.r(paciente, options);
	},
	update: async (tuple, options) => {
		return await crud.u(paciente, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(paciente, options);
	}
};

export default controller;
