import crud from "./utils/crud.js";
import { funcionario } from "../models/index.js";
import { pessoa } from "./index.js";

const controller = {
	insert: async (tuple) => {
		const { data_contrato, salario, senha_hash } = tuple;
		const common = await pessoa.insert(tuple);
		const codigo = common.codigo;
		return await crud.c(funcionario, {
			codigo,
			data_contrato,
			salario,
			senha_hash
		});
	},
	select: async (options) => {
		return await crud.r(funcionario, options);
	},
	update: async (tuple, options) => {
		return await crud.u(funcionario, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(funcionario, options);
	}
};

export default controller;
