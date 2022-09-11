import { medico as model } from "../models/index.js";

const controller = {
	async insert(tuple) {
		try {
			const query = await model.create(tuple);
			return query;
		} catch (error) {
			return error;
		}
	},
	
	async select(filter = {}) {
		const { attributes, where } = filter;
		try {
			const query = await model.findAll({
				attributes: attributes,
				where: where
			});
			return query;
		} catch (error) {
			return error;
		}
	},

	async update(tuple, filter = {}) {
		const { where } = filter;
		try {
			await model.update(tuple, {
				where: where
			});
			return "Tuple updated";
		} catch (error) {
			return error;
		}
	},

	async remove(filter = {}) {
		const { where } = filter;
		try {
			await model.destroy({
				where: where
			});
			return "Tuple deleted";
		} catch (error) {
			return error;
		}
	}
};

export default controller;
