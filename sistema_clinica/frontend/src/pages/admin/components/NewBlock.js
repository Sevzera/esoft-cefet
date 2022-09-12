import NewPatientForm from "./NewPatientForm";
import NewEmployeeForm from "./NewEmployeeForm";

function NewBlock({ type }) {
	const title_style = "uppercase text-center mb-3 font-bold";
	const input_box_style = "text-sm w-full text-center py-1";

	async function handleSubmit(e) {
		e.preventDefault();
		const common = {
			nome: e.target.nome.value,
			email: e.target.email.value,
			telefone: e.target.telefone.value,
			cep: e.target.cep.value,
			logradouro: e.target.logradouro.value,
			bairro: e.target.bairro.value,
			cidade: e.target.cidade.value,
			estado: e.target.estado.value
		};
		const res = await fetch("http://localhost:1999/api/pessoa", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(common)
		});
		const data = await res.json();
		if (type === "funcionario") {
			const funcionario = {
				codigo: data.codigo,
				data_contrato: e.target.data_contrato.value,
				salario: e.target.salario.value,
				senha_hash: e.target.senha_hash.value
			};
			await fetch("http://localhost:1999/api/funcionario", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(funcionario)
			});
			if (e.target.cargo.value === "medico") {
				const medico = {
					codigo: data.codigo,
					crm: e.target.crm.value,
					especialidade: e.target.especialidade.value
				};
				await fetch("http://localhost:1999/api/medico", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(medico)
				});
			}
		} else if (type === "paciente") {
			const paciente = {
				codigo: data.codigo,
				peso: e.target.peso.value,
				altura: e.target.altura.value,
				tipo_sanguineo: e.target.tipo_sanguineo.value
			};
			await fetch("http://localhost:1999/api/paciente", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(paciente)
			});
		}
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
