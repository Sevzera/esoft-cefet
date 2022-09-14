import React from "react";

const ListBlock = ({ type, crm }) => {
	const label_style = "text-center text-4xl font-bold";

	const [list, setList] = React.useState([]);
	const [filterByCRM, setFilterByCRM] = React.useState(false);

	async function updateList(filter = "") {
		const res = await fetch(
			"http://localhost:1999/api/" + type + "/?spec=lista" + filter,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		const data = await res.json();
		setList(data);
	}

	React.useEffect(() => {
		updateList();
	}, [type]);

	React.useEffect(() => {
		if (type === "agenda" && filterByCRM) updateList(`&doc=${crm}`);
		else updateList();
	}, [filterByCRM]);

	return (
		<div className="bg-gray-600 border-2 w-8/12 h-4/6 flex flex-col shadow-lg rounded-lg">
			{crm && (
				<>
					<label for="filterByCRM" className="text-center text-2xl">
						Filtrar suas consultas
					</label>
					<input
						name="filterByCRM"
						checked={filterByCRM}
						type="checkbox"
						onChange={(e) => {
							e.preventDefault();
							setFilterByCRM(e.target.checked);
						}}
					/>
				</>
			)}
			<h1 className={label_style}>
				{type === "funcionario" && <>FUNCIONARIOS</>}
				{type === "paciente" && <>PACIENTES</>}
				{type === "endereco" && <>ENDERECOS</>}
				{type === "agenda" && <>CONSULTAS</>}
			</h1>
			<ul className="flex flex-col mt-[30px] overflow-auto bg-white odd:bg-white even:bg-slate-50">
				<div className="flex flex-row text-center font-bold">
					{type === "funcionario" && (
						<>
							<p className="w-[25%]">Nome</p>
							<p className="w-[25%]">Salário</p>
							<p className="w-[25%]">Email</p>
							<p className="w-[25%]">Telefone</p>
						</>
					)}
					{type === "endereco" && (
						<>
							<p className="w-[20%]">CEP</p>
							<p className="w-[20%]">Logradouro</p>
							<p className="w-[20%]">Bairro</p>
							<p className="w-[20%]">Cidade</p>
							<p className="w-[20%]">Estado</p>
						</>
					)}
					{type === "paciente" && (
						<>
							<p className="w-[25%]">Nome</p>
							<p className="w-[25%]">Tipo Sanguíneo</p>
							<p className="w-[25%]">Email</p>
							<p className="w-[25%]">Telefone</p>
						</>
					)}
					{type === "agenda" && (
						<>
							<p className="w-[20%]">Data</p>
							<p className="w-[20%]">Horário</p>
							<p className="w-[20%]">Nome</p>
							<p className="w-[20%]">CRM</p>
							<p className="w-[20%]">Especialidade</p>
						</>
					)}
				</div>
				{list.map((item) => (
					<li
						key={item.codigo}
						className="flex flex-row items-center border-b-2 border-gray-300"
					>
						{type === "funcionario" && (
							<>
								<span className="text-2xl text-center w-[25%]">
									{item.nome}
								</span>
								<span className="text-2xl text-center w-[25%]">
									{item.salario}
								</span>
								<span className="text-2xl text-center w-[25%]">
									{item.email}
								</span>
								<span className="text-2xl text-center w-[25%]">
									{item.telefone}
								</span>
							</>
						)}
						{type === "endereco" && (
							<>
								<span className="text-2xl text-center w-[20%]">{item.cep}</span>
								<span className="text-2xl text-center w-[20%]">
									{item.logradouro}
								</span>
								<span className="text-2xl text-center w-[20%]">
									{item.bairro}
								</span>
								<span className="text-2xl text-center w-[20%]">
									{item.cidade}
								</span>
								<span className="text-2xl text-center w-[20%]">
									{item.estado}
								</span>
							</>
						)}
						{type === "paciente" && (
							<>
								<span className="text-2xl text-center w-[25%]">
									{item.nome}
								</span>
								<span className="text-2xl text-center w-[25%]">
									{item.tipo_sanguineo}
								</span>
								<span className="text-2xl text-center w-[25%]">
									{item.email}
								</span>
								<span className="text-2xl text-center w-[25%]">
									{item.telefone}
								</span>
							</>
						)}
						{type === "agenda" && (
							<>
								<span className="text-2xl text-center w-[20%]">
									{item.data}
								</span>
								<span className="text-2xl text-center w-[20%]">
									{item.horario + ":00"}
								</span>
								<span className="text-2xl text-center w-[20%]">
									{item.nome}
								</span>
								<span className="text-2xl text-center w-[20%]">{item.crm}</span>
								<span className="text-2xl text-center w-[20%]">
									{item.especialidade}
								</span>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListBlock;
