import crud from "./utils/crud.js";
import { endereco } from "../models/index.js";

const controller = {
	insert: async (tuple) => {
		return await crud.c(endereco, tuple);
	},
	select: async (options) => {
		return await crud.r(endereco, options);
	},
	update: async (tuple, options) => {
		return await crud.u(endereco, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(endereco, options);
	}
};

export default controller;
