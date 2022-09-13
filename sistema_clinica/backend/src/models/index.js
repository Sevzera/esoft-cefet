import { default as pessoa } from "./pessoa.js";
import { default as paciente } from "./paciente.js";
import { default as funcionario } from "./funcionario.js";
import { default as medico } from "./medico.js";
import { default as agenda } from "./agenda.js";
import { default as endereco } from "./endereco.js";

pessoa.hasOne(funcionario, {
	foreignKey: "codigo",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
funcionario.belongsTo(pessoa, {
	foreignKey: "codigo",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
pessoa.hasOne(paciente, {
	foreignKey: "codigo",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
paciente.belongsTo(pessoa, {
	foreignKey: "codigo",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
funcionario.hasOne(medico, {
	foreignKey: "codigo",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
medico.belongsTo(funcionario, {
	foreignKey: "codigo",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
medico.hasMany(agenda, {
	foreignKey: "codigo_medico",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});
agenda.belongsTo(medico, {
	foreignKey: "codigo_medico",
	sourceKey: "codigo",
	onDelete: "CASCADE"
});

export { pessoa, paciente, funcionario, medico, agenda, endereco };
