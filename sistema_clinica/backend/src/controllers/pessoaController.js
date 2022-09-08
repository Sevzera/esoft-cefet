import { pessoa } from "../database.js";

export async function select(filter) {
	filter ? filter : (filter = {});
	const { attributes, where } = filter;
	const query = await pessoa.findAll({
		attributes: attributes,
		where: where
	});
	return query;
}

export async function insert(newPessoa) {
	const query = await pessoa.create(newPessoa);
	return query;
}

export async function update(updatedPessoa, filter) {
	const { where } = filter;
	await pessoa.update(updatedPessoa, {
		where: where
	});
	return "Pessoa updated";
}

export async function remove(filter) {
	const { where } = filter;
	await pessoa.destroy({
		where: where
	});
	return "Pessoa deleted";
}
