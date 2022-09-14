import crud from "./utils/crud.js";
import { agenda, medico } from "../models/index.js";

const controller = {
	insert: async (tuple) => {
		return await crud.c(agenda, tuple);
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const { doc } = options || null;
			const agendas = await crud.r(agenda, {
				attributes: ["data", "horario", "nome", "email", "telefone"],
				include: [
					{
						model: medico,
						as: "medico",
						attributes: ["crm", "especialidade"],
						where: doc ? { crm: doc } : {}
					}
				]
			});
			const query = agendas.map((agenda) => {
				const { data, horario, nome, email, telefone, medico } = agenda;
				const { crm, especialidade } = medico;
				return { data, horario, nome, email, telefone, crm, especialidade };
			});
			console.log(query);
			return query;
		} else if (spec === "agendar") {
			console.log(options);
			const { date, doc } = options;
			const agendas = await crud.r(agenda, {
				attributes: ["horario"],
				where: {
					data: date
				},
				include: [
					{
						model: medico,
						as: "medico",
						where: doc ? { codigo: doc } : {}
					}
				]
			});
			const query = agendas.map((agenda) => agenda.horario);
			console.log(query);
			return query;
		}
	},
	update: async (tuple, options) => {
		return await crud.u(agenda, tuple, options);
	},
	remove: async (options) => {
		return await crud.d(agenda, options);
	}
};

export default controller;
