import NewPatientForm from "./NewPatientForm";
import NewEmployeeForm from "./NewEmployeeForm";

function NewBlock({ type }) {
	const title_style = "uppercase text-center mb-3 font-bold";
	const input_box_style = "text-sm w-full text-center py-1";

	async function handleSubmit(e) {
		const form = e.target;
		let endpoint = "";
		const url = "http://localhost:1999/api/";
		let data = {
			nome: form.nome.value,
			email: form.email.value,
			cep: form.cep.value,
			logradouro: form.logradouro.value,
			bairro: form.bairro.value,
			cidade: form.cidade.value,
			estado: form.estado.value,
			telefone: form.telefone.value
		};
		if (type === "funcionario") {
			data = {
				...data,
				data_contrato: form.data_contrato.value,
				salario: form.salario.value,
				senha_hash: form.senha_hash.value
			};
			if (form.cargo.value === "medico") {
				data = {
					...data,
					crm: form.crm.value,
					especialidade: form.especialidade.value
				};
				endpoint = "medico";
			} else {
				endpoint = "funcionario";
			}
		} else if (type === "paciente") {
			data = {
				...data,
				tipo_sanguineo: form.tipo_sanguineo.value,
				peso: form.peso.value,
				altura: form.altura.value
			};
			endpoint = "paciente";
		}
		const result = await fetch(url + endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		const res = await result.json();
		console.log(res);
	}

	return (
		<div>
			<form
				className="w-full h-full text-cs flex flex-col font-semibold text-center"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(e);
				}}
			>
				{type === "funcionario" && (
					<NewEmployeeForm
						input_box_style={input_box_style}
						title_style={title_style}
					/>
				)}
				{type === "paciente" && (
					<NewPatientForm
						input_box_style={input_box_style}
						title_style={title_style}
					/>
				)}
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 shadow hover:bg-[#1e293b] hover:text-white rounded-2xl"
					type="submit"
					value="Submit"
				></input>
			</form>
		</div>
	);
}

export default NewBlock;
