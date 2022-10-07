import React from "react";

import PersonalInfoForm from "./PersonalInfoForm";

function NewEmployeeForm({ input_box_style, title_style }) {
	const [isDoctor, setIsDoctor] = React.useState(false);

	return (
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
				<div className="flex flex-col justify-center items-center">
					<label for="data_contrato">Data Inicio</label>
					<input
						className={input_box_style + " w-1/2"}
						type="date"
						name="data_contrato"
					/>
					<label for="salario">Salario</label>
					<input
						className={input_box_style + " w-1/2"}
						type="number"
						name="salario"
						placeholder="Salario"
					/>
					<label for="senha">Senha</label>
					<input
						className={input_box_style + " w-1/2"}
						type="password"
						name="senha_hash"
						placeholder="Senha"
					/>
				</div>
			</div>
		</div>
	);
}

export default NewEmployeeForm;
