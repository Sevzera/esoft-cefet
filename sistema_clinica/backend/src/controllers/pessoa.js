import { pessoa as model } from "../models/index.js";

const controller = {
	async select(filter) {
		filter ? filter : (filter = {});
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

	async insert(newPessoa) {
		const { email, password } = newPessoa;
		try {
			const query = await model.create({
				email,
				password
			});
			return query;
		} catch (error) {
			return error;
		}
	},

	async update(updatedPessoa) {
		const { id, email, password } = updatedPessoa;
		try {
			await model.update(
				{
					email,
					password
				},
				{
					where: {
						id
					}
				}
			);
			return "Pessoa updated";
		} catch (error) {
			return error;
		}
	},

	async remove(filter) {
		const { where } = filter;
		try {
			await model.destroy({
				where: where
			});
			return "Pessoa deleted";
		} catch (error) {
			return error;
		}
	}
};

export default controller;
