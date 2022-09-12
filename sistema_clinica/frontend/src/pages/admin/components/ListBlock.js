import React from "react";

const ListBlock = ({ type }) => {
	const label_style = "text-center text-4xl font-bold";

	const [list, setList] = React.useState([]);

	async function updateList() {
		let res = await fetch(`http://localhost:1999/api/pessoa`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();
		console.log(data);
		setList(data);
	}

	React.useEffect(() => {
		console.log(type);
		updateList();
	}, []);

	return (
		<div className="bg-gray-600 border-2 w-8/12 h-4/6 flex flex-col shadow-lg rounded-lg">
			{type === "funcionario" && <h1 className={label_style}>FUNCIONARIOS</h1>}
			{type === "paciente" && <h1 className={label_style}>PACIENTES</h1>}
			{type === "endereco" && <h1 className={label_style}>ENDERECOS</h1>}
			{type === "agenda" && <h1 className={label_style}>CONSULTAS</h1>}
			<ul className="flex flex-col mt-[30px] overflow-auto bg-white odd:bg-white even:bg-slate-50">
				{/* {list.map((item) => (
					<li
						key={item.codigo}
						className="flex flex-row justify-between items-center border-b-2 border-gray-300"
					>
						{type === "funcionario" && (
							<>
								<p className="text-center text-2xl font-bold">{item.codigo}</p>
								<p className="text-center text-2xl font-bold">
									{item.data_contrato}
								</p>
							</>
						)}
						{type === "endereco" && (
							<>
								<p className="text-center text-2xl font-bold">{item.cep}</p>
								<p className="text-center text-2xl font-bold">
									{item.logradouro}
								</p>
								<p className="text-center text-2xl font-bold">{item.bairro}</p>
								<p className="text-center text-2xl font-bold">{item.cidade}</p>
								<p className="text-center text-2xl font-bold">{item.estado}</p>
							</>
						)}
						{type === "paciente" && (
							<>
								<p className="text-center text-2xl font-bold">{item.nome}</p>
								<p className="text-center text-2xl font-bold">
									{item.tipo_sanguineo}
								</p>
							</>
						)}
						{type === "agenda" && (
							<>
								<p className="text-center text-2xl font-bold">{item.data}</p>
								<p className="text-center text-2xl font-bold">{item.horario}</p>
								<p className="text-center text-2xl font-bold">{item.nome}</p>
							</>
						)}
					</li>
				))} */}
			</ul>
		</div>
	);
};

export default ListBlock;
