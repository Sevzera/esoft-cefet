import crud from "./utils/crud.js";
import { medico, pessoa, funcionario } from "../models/index.js";
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
		const { spec } = options;
		if (spec === "agendar") {
			let query;
			const { especialidade } = options;
			if (especialidade) {
				const medicos = await crud.r(medico, {
					attributes: ["crm"],
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
				console.log(medicos);
				query = medicos.map((medico) => {
					const { funcionario, crm } = medico;
					const { pessoa } = funcionario;
					const { nome } = pessoa;
					return { nome, crm };
				});
			} else {
				const especialidades = await crud.r(medico, {
					attributes: ["especialidade"],
					group: ["especialidade"]
				});
				query = especialidades.map((especialidade) => {
					return especialidade.especialidade;
				});
			}
			console.log(query);
			return query;
		}
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
