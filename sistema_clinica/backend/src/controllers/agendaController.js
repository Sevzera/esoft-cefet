import { agenda, medico } from "../models/index.js";

const agendaController = {
	insert: async (tuple) => {
		return await agenda.create(tuple);
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const { doc } = options || null;
			const agendas = await agenda.findAll({
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
			return query;
		} else if (spec === "agendar") {
			const { date, doc } = options;
			const agendas = await agenda.findAll({
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
			return query;
		}
	}
};

export default agendaController;
