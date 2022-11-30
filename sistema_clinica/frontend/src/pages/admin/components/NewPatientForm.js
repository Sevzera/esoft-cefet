import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";

function NewPatientForm() {
	const title_style = "uppercase text-center mb-3 font-bold";
	const input_box_style =
		"px-2 py-2 text-sm w-full text-center border-[1px] border-black";

	async function handleSubmit(e) {
		const form = e.target;
		let data = {
			nome: form.nome.value,
			email: form.email.value,
			cep: form.cep.value,
			logradouro: form.logradouro.value,
			bairro: form.bairro.value,
			cidade: form.cidade.value,
			estado: form.estado.value,
			telefone: form.telefone.value,
			tipo_sanguineo: form.tipo_sanguineo.value,
			peso: form.peso.value,
			altura: form.altura.value
		};
		const result = await fetch("http://localhost:1999/api/paciente", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		const res = await result.json();
	}
	return (
		<form
			className="w-full h-full text-cs flex flex-col font-semibold text-center"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="flex flex-col h-full w-full justify-start items-center">
				<label className={title_style}>NOVO PACIENTE</label>
				<PersonalInfoForm input_box_style={input_box_style} />
				<div className="flex flex-col justify-center items-center">
					<label for="peso">Peso</label>
					<input
						className={input_box_style}
						type="number"
						name="peso"
						placeholder="Peso"
					/>
					<label for="altura">Altura</label>
					<input
						className={input_box_style}
						type="number"
						name="altura"
						step={0.01}
						placeholder="Altura"
					/>
					<label for="tipo_sanguineo">Tipo Sanguineo</label>
					<input
						className={input_box_style}
						type="text"
						name="tipo_sanguineo"
						placeholder="Tipo Sanguineo"
					/>
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

export default NewPatientForm;
