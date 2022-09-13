import React from "react";

const ListBlock = ({ type }) => {
	const label_style = "text-center text-4xl font-bold";

	const [list, setList] = React.useState([]);

	async function updateList(query) {
		const res = await fetch(
			"http://localhost:1999/api/" + type + (query ? "/?" + query : ""),
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

	React.useEffect(() => {}, []);

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
						{type === "funcionario" && <></>}
						{type === "endereco" && <></>}
						{type === "paciente" && <></>}
						{type === "agenda" && <></>}
					</li>
				))} */}
			</ul>
		</div>
	);
};

export default ListBlock;
