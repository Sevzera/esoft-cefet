import React from "react";

function CommonFormComponent({ input_box_style }) {
	return (
		<div>
			<div className="flex flex-row justify-around">
				<div className="flex flex-col items-center">
					<label for="nome">Nome</label>
					<input
						className={input_box_style + " w-3/4"}
						type="text"
						name="nome"
						placeholder="Nome"
					/>
				</div>
				<div className="flex flex-col items-center">
					<label for="email">Email</label>
					<input
						className={input_box_style + " w-3/4"}
						type="text"
						name="email"
						placeholder="Email"
					/>
				</div>
				<div className="flex flex-col items-center">
					<label for="telefone">Telefone</label>
					<input
						className={input_box_style + " w-3/4"}
						type="text"
						name="telefone"
						placeholder="Telefone"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<label for="cep">CEP</label>
				<input
					className={input_box_style + " w-1/2"}
					type="text"
					name="cep"
					placeholder="CEP"
				/>
			</div>
			<div className="flex flex-row justify-around">
				<div className="flex flex-col items-center">
					<label for="logradouro">Logradouro</label>
					<input
						className={input_box_style}
						type="text"
						name="logradouro"
						placeholder="Logradouro"
					/>
					<label for="bairro">Bairro</label>
					<input
						className={input_box_style}
						type="text"
						name="bairro"
						placeholder="Bairro"
					/>
				</div>
				<div className="flex flex-col items-center">
					<label for="cidade">Cidade</label>
					<input
						className={input_box_style}
						type="text"
						name="cidade"
						placeholder="Cidade"
					/>
					<label for="estado">Estado</label>
					<input
						className={input_box_style}
						type="text"
						name="estado"
						placeholder="Estado"
					/>
				</div>
			</div>
		</div>
	);
}

export default CommonFormComponent;
