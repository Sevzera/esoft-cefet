import crud from "./utils/crud.js";
import { agenda } from "../models/index.js";

const controller = {
	insert: async (tuple) => {
		return await crud.c(agenda, tuple);
	},
	select: async (options) => {
		return await crud.r(agenda, options);
	},
	update: async (tuple, options) => {
		return await crud.u(agenda, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(agenda, options);
	}
};

export default controller;
