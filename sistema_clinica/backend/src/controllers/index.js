export { default as pessoa } from "./pessoa.js";
export { default as paciente } from "./paciente.js";
export { default as funcionario } from "./funcionario.js";
export { default as medico } from "./medico.js";
export { default as agenda } from "./agenda.js";
export { default as endereco } from "./endereco.js";

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