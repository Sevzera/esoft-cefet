const crud = {
	c: async (model, tuple, options = {}) => {
		try {
			const query = await model.create(tuple);
			return query;
		} catch (error) {
			return error;
		}
	},

	r: async (model, options = {}) => {
		try {
			const query = await model.findAll(options);
			return query;
		} catch (error) {
			return error;
		}
	},

	u: async (model, tuple, options = {}) => {
		try {
			await model.update(tuple, options);
			return "Tuple updated";
		} catch (error) {
			return error;
		}
	},

	d: async (model, options = {}) => {
		try {
			await model.destroy(options);
			return "Tuple deleted";
		} catch (error) {
			return error;
		}
	}
};

export default crud;
