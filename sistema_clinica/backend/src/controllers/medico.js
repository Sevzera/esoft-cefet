import crud from "./utils/crud.js";
import { medico } from "../models/index.js";
import { funcionario as funcionario_router } from "./index.js";

const controller = {
	insert: async (tuple) => {
		const { especialidade, crm } = tuple;
		const common = await funcionario_router.insert(tuple);
		const codigo = common.codigo;
		return await crud.c(medico, {
			codigo,
			especialidade,
			crm
		});
	},
	select: async (options) => {
		return await crud.r(medico, options);
	},
	update: async (tuple, options) => {
		return await crud.u(medico, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(medico, options);
	}
};

export default controller;
