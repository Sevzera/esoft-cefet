import React from "react";
import CommonFormComponent from "./CommonFormComponent";

function NewPatientForm({ input_box_style, title_style }) {
	return (
		<div className="flex flex-col h-full w-full justify-start items-center">
			<label className={title_style}>NOVO PACIENTE</label>
			<CommonFormComponent input_box_style={input_box_style} />
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
		</div>
	);
}

export default NewPatientForm;
