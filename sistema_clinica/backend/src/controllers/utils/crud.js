export async function c(model, options = {}) {
	try {
		const query = await model.create(tuple);
		return query;
	} catch (error) {
		return error;
	}
}

export async function r(model, options = {}) {
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
}

export async function u(model, options = {}) {
	const { where } = filter;
	try {
		await model.update(tuple, {
			where: where
		});
		return "Tuple updated";
	} catch (error) {
		return error;
	}
}

export async function d(model, options = {}) {
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
