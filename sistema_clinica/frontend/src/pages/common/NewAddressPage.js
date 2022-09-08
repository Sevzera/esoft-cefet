function NewAddressPage() {
	return (
		<form
			className="w-full h-full text-cs flex flex-col font-semibold"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="flex flex-col h-full w-full justify-around items-center">
				<label className="uppercase text-center mb-3 font-bold">
					NOVO ENDEREÇO
				</label>
				<label>CEP</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="cep"
					placeholder="CEP"
				/>
				<label>Logradouro</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="logradouro"
					placeholder="Logradouro"
				/>
				<label>Bairro</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="bairro"
					placeholder="Bairro"
				/>
				<label>Cidade</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="cidade"
					placeholder="Cidade"
				/>
				<label>Estado</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="estado"
					placeholder="Estado"
				/>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 px-5 shadow hover:bg-[#1e293b] hover:text-white rounded-2xl"
					type="submit"
					value="Submit"
				></input>
			</div>
		</form>
	);
}

export default NewAddressPage;
