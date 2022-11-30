import React from "react";

import PersonalInfoForm from "./PersonalInfoForm";

function NewEmployeeForm() {
	const [isDoctor, setIsDoctor] = React.useState(false);
	const title_style = "uppercase text-center mb-3 font-bold";
	const input_box_style =
		"px-2 py-2 text-sm w-full text-center border-[1px] border-black";

	async function handleSubmit(e) {
		const form = e.target;
		let endpoint = "";
		let data = {
			nome: form.nome.value,
			email: form.email.value,
			cep: form.cep.value,
			logradouro: form.logradouro.value,
			bairro: form.bairro.value,
			cidade: form.cidade.value,
			estado: form.estado.value,
			telefone: form.telefone.value,
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
		try {
			const res = await fetch("http://localhost:1999/api/" + endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});
			alert("Funcionário cadastrado com sucesso!");
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<form
			className="w-full h-full text-cs flex flex-col font-semibold text-center"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(e);
			}}
		>
			<div className="flex flex-col h-full w-full justify-start items-center">
				<label className={title_style}>NOVO FUNCIONARIO</label>
				<div className="flex flex-col justify-center">
					<label for="cargo">Cargo</label>
					<select
						name="cargo"
						className={input_box_style}
						onChange={(e) => {
							e.preventDefault();
							setIsDoctor(e.target.value === "medico");
						}}
					>
						<option value="funcionario">Funcionario</option>
						<option value="medico">Médico</option>
					</select>
					{isDoctor && (
						<>
							<div className="flex flex-row justify-center">
								<div className="flex flex-col items-center">
									<label for="especialidade">Especialidade</label>
									<input
										className={input_box_style + " w-3/4"}
										type="text"
										name="especialidade"
										placeholder="Especialidade"
									/>
								</div>
								<div className="flex flex-col items-center">
									<label for="crm">CRM</label>
									<input
										className={input_box_style + " w-3/4"}
										type="text"
										name="crm"
										placeholder="CRM"
									/>
								</div>
							</div>
						</>
					)}
					<PersonalInfoForm input_box_style={input_box_style} />
					<div className="flex justify-around items-center">
						<div className="flex flex-col justify-center items-center w-1/4">
							<label for="data_contrato">Data Inicio</label>
							<input
								className={input_box_style}
								type="date"
								name="data_contrato"
							/>
						</div>
						<div className="flex flex-col justify-center items-center w-1/4">
							<label for="salario">Salario</label>
							<input
								className={input_box_style}
								type="number"
								name="salario"
								placeholder="Salario"
							/>
						</div>
						<div className="flex flex-col justify-center items-center w-1/4">
							<label for="senha">Senha</label>
							<input
								className={input_box_style}
								type="password"
								name="senha_hash"
								placeholder="Senha"
							/>
						</div>
					</div>
				</div>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 px-5 shadow hover:bg-[#48dbdb] rounded-2xl w-1/5"
					type="submit"
					value="Submit"
				></input>
			</div>
		</form>
	);
}

export default NewEmployeeForm;
