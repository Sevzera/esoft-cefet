import { paciente, pessoa } from "../models/index.js";
import { pessoaRouter } from "../routers/index.js";

const pacienteController = {
	insert: async (tuple) => {
		const { tipo_sanguineo, peso, altura } = tuple;
		const common = await pessoaRouter.insert(tuple);
		const codigo = common.codigo;
		return await paciente.create({
			codigo,
			tipo_sanguineo,
			peso,
			altura
		});
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const pacientes = await paciente.findAll({
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
	}
};

export default pacienteController;
