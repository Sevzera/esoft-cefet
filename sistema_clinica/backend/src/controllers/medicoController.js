import { medico, pessoa, funcionario } from "../models/index.js";
import { funcionarioController } from "../controllers/index.js";

const controller = {
	insert: async (tuple) => {
		const { especialidade, crm } = tuple;
		const common = await funcionarioController.insert(tuple);
		const codigo = common.codigo;
		return await medico.create({
			codigo,
			especialidade,
			crm
		});
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "agendar") {
			let query;
			const { especialidade } = options;
			if (especialidade) {
				const medicos = await medico.findAll({
					attributes: ["codigo"],
					where: { especialidade },
					include: [
						{
							model: funcionario,
							as: "funcionario",
							include: [
								{
									model: pessoa,
									as: "pessoa",
									attributes: ["nome"]
								}
							]
						}
					]
				});
				query = medicos.map((medico) => {
					const { codigo, funcionario } = medico;
					const { pessoa } = funcionario;
					const { nome } = pessoa;
					return { codigo, nome };
				});
			} else {
				const medicos = await medico.findAll({
					attributes: ["especialidade"],
					group: ["especialidade"]
				});
				query = medicos.map((especialidade) => especialidade.especialidade);
			}
			return query;
		}
		return await medico.findAll(options);
	}
};

export default controller;
