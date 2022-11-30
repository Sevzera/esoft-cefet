function NewAddressForm() {
	const input_box_style =
		"px-2 py-2 text-sm w-2/5 text-center border-[1px] border-black";

	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const data = {
			cep: form.cep.value,
			logradouro: form.logradouro.value,
			bairro: form.bairro.value,
			cidade: form.cidade.value,
			estado: form.estado.value
		};
		try {
			const res = await fetch("http://localhost:1999/api/endereco", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(json)
			});
			alert("Endereço cadastrado com sucesso!");
		} catch (err) {
			console.log(err);
		}
	}

	async function getAddress(e) {
		const cep = e.target.value || "";
		const res = await fetch(
			"http://localhost:1999/api/endereco?spec=autopr&cep=" + cep,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		const result = await res.json();
		if (result) {
			const { logradouro, bairro, cidade, estado } = result[0];
			const form = e.target.form;
			form.logradouro.value = logradouro;
			form.bairro.value = bairro;
			form.cidade.value = cidade;
			form.estado.value = estado;
		}
	}

	return (
		<form
			className="w-full max-h-[95%] text-cs flex flex-col font-semibold"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(e);
			}}
		>
			<div className="flex flex-col h-full w-full justify-around items-center">
				<label className="uppercase text-center mb-3 font-bold">
					NOVO ENDEREÇO
				</label>
				<label>CEP</label>
				<input
					className={input_box_style}
					type="text"
					name="cep"
					placeholder="CEP"
					onChange={(e) => {
						e.preventDefault();
						getAddress(e);
					}}
				/>
				<label>Logradouro</label>
				<input
					className={input_box_style}
					type="text"
					name="logradouro"
					placeholder="Logradouro"
				/>
				<label>Bairro</label>
				<input
					className={input_box_style}
					type="text"
					name="bairro"
					placeholder="Bairro"
				/>
				<label>Cidade</label>
				<input
					className={input_box_style}
					type="text"
					name="cidade"
					placeholder="Cidade"
				/>
				<label>Estado</label>
				<input
					className={input_box_style}
					type="text"
					name="estado"
					placeholder="Estado"
				/>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 px-5 shadow hover:bg-[#48dbdb] rounded-2xl w-1/5"
					type="submit"
					value="Submit"
				></input>
			</div>
		</form>
	);
}

export default NewAddressForm;
