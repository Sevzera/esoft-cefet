import { funcionario, pessoa, medico } from "../models/index.js";
import { pessoaController } from "../controllers/index.js";

const controller = {
	insert: async (tuple) => {
		const { data_contrato, salario, senha_hash } = tuple;
		const common = await pessoaController.insert(tuple);
		const codigo = common.codigo;
		return await funcionario.create({
			codigo,
			data_contrato,
			salario,
			senha_hash
		});
	},
	select: async (options) => {
		const { spec } = options;
		if (spec === "lista") {
			const funcionarios = await funcionario.findAll({
				attributes: ["salario"],
				include: [
					{
						model: pessoa,
						as: "pessoa",
						attributes: ["nome", "email", "telefone"]
					},
					{
						model: medico,
						as: "medico",
						attributes: ["crm", "especialidade"]
					}
				]
			});
			const query = funcionarios.map((funcionario) => {
				const { salario, pessoa, medico } = funcionario;
				const { nome, email, telefone } = pessoa;
				if (medico) {
					const { crm, especialidade } = medico;
					return { nome, salario, email, telefone, crm, especialidade };
				}
				return { nome, salario, email, telefone };
			});
			return query;
		} else if (spec === "login") {
			const { email, senha_hash } = options;
			const funcionarios = await funcionario.findAll({
				where: { senha_hash: senha_hash },
				include: [
					{
						model: pessoa,
						as: "pessoa",
						attributes: ["email"],
						where: { email: email }
					},
					{
						model: medico,
						as: "medico",
						attributes: ["crm"]
					}
				]
			});
			if (funcionarios[0]) {
				const { pessoa, medico } = funcionarios[0];
				const { email } = pessoa;
				if (medico) {
					const { crm } = medico;
					return { email, crm };
				}
				return { email };
			} else {
				return null;
			}
		}
	}
};

export default controller;
