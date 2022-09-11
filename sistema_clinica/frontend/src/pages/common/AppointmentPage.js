import { useState, useEffect } from "react";

function AppointmentPage() {
	const [specialties, setSpecialties] = useState([]);
	const [selectedSpecialty, setSelectedSpecialty] = useState("");
	const [doctors, setDoctors] = useState([]);
	const [selectedDoctor, setSelectedDoctor] = useState("");
	const [openSlots, setOpenSlots] = useState([]);

	useEffect(async () => {
		const result = await fetch("http://localhost:1999/api/medicos", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				attributes: ["especialidade"]
			})
		});
		const data = await result.json();
		setSpecialties(data);
	}, []);

	async function getDoctors(e) {}

	return (
		<form
			className="w-full h-full text-cs flex flex-col font-semibold"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="flex flex-col h-full w-full justify-around items-center">
				<label className="uppercase text-center mb-3 font-bold">
					MARCAR CONSULTA
				</label>
				<label>Especialidade</label>
				<select
					className="px-3 py-3 text-sm w-2/5 text-center"
					onChange={(e) => {
						e.preventDefault();
						getDoctors(e);
					}}
				>
					{specialties.map((specialty) => (
						<option value={specialty}>{specialty}</option>
					))}
				</select>
				<label>Profissional</label>
				<select className="px-3 py-3 text-sm w-2/5 text-center">
					{doctors.map((doctor) => (
						<option value={doctor}>{doctor}</option>
					))}
				</select>
				<label>Data</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="date"
					name="data"
				/>
				<label>Horário</label>
				<select className="px-3 py-3 text-sm w-2/5 text-center">
					{openSlots.map((slot) => (
						<option value={slot}>{slot}</option>
					))}
				</select>
				<label>Nome</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="nome"
					placeholder="Nome"
				/>
				<label>Email</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="email"
					placeholder="Email"
				/>
				<label>Telefone</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="text"
					name="telefone"
					placeholder="Telefone"
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

export default AppointmentPage;
