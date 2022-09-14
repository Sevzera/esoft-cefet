import React from "react";

function AppointmentPage() {
	const [specialties, setSpecialties] = React.useState([]);
	const [doctors, setDoctors] = React.useState([]);
	const [selectedDoctorCode, setSelectedDoctorCode] = React.useState("");
	const [openSlots, setOpenSlots] = React.useState([]);

	async function getSpecialties() {
		const res = await fetch("http://localhost:1999/api/medico?spec=agendar");
		const data = await res.json();
		setSpecialties(data);
	}

	async function getDoctors(e) {
		const res = await fetch(
			`http://localhost:1999/api/medico?spec=agendar&especialidade=${e.target.value}`
		);
		const data = await res.json();
		setDoctors(data);
	}

	async function getOpenSlots(e) {
		const date = e.target.value;
		const doc = selectedDoctorCode || "";
		const res = await fetch(
			`http://localhost:1999/api/agenda?spec=agendar&date=${date}&doc=${doc}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		const data = await res.json();
		setOpenSlots(
			["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"].filter(
				(horario) => !data.includes(horario)
			)
		);
	}

	async function handleSubmite(e) {
		const form = e.target;
		const data = {
			codigo_medico: selectedDoctorCode,
			data: form.data.value,
			horario: form.horario.value,
			nome: form.nome.value,
			email: form.email.value,
			telefone: form.telefone.value
		};
		const res = await fetch("http://localhost:1999/api/agenda", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		const result = await res.json();
		console.log(result);
	}

	React.useEffect(() => {
		getSpecialties();
	}, []);

	return (
		<form
			className="w-full h-full text-cs flex flex-col font-semibold"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmite(e);
			}}
		>
			<div className="flex flex-col h-full w-full justify-around items-center">
				<label className="uppercase text-center mb-3 font-bold">
					MARCAR CONSULTA
				</label>
				<label>Especialidade</label>
				<select
					className="px-3 py-3 text-sm w-2/5 text-center"
					name="especialidade"
					onClick={(e) => {
						e.preventDefault();
						getDoctors(e);
					}}
				>
					{specialties.map((specialty) => (
						<option value={specialty}>{specialty}</option>
					))}
				</select>
				<label>Profissional</label>
				<select
					className="px-3 py-3 text-sm w-2/5 text-center"
					name="medico_nome"
					onClick={(e) => {
						e.preventDefault();
						setSelectedDoctorCode(e.target.value);
					}}
				>
					{doctors.map((doctor) => (
						<option value={doctor.codigo}>{doctor.nome}</option>
					))}
				</select>
				<label>Data</label>
				<input
					className="px-3 py-3 text-sm w-2/5 text-center"
					type="date"
					name="data"
					onChange={(e) => {
						e.preventDefault();
						getOpenSlots(e);
					}}
				/>
				<label>Horário</label>
				<select className="px-3 py-3 text-sm w-2/5 text-center" name="horario">
					{openSlots.map((slot) => (
						<option value={slot}>{slot + ":00"}</option>
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
