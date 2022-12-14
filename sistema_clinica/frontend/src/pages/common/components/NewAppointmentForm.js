import React from "react";

function NewAppointmentForm() {
	const [specialties, setSpecialties] = React.useState([]);
	const [doctors, setDoctors] = React.useState([]);
	const [selectedDoctorCode, setSelectedDoctorCode] = React.useState("");
	const [openSlots, setOpenSlots] = React.useState([]);
	const input_box_style =
		"px-2 py-2 text-sm w-2/5 text-center border-[1px] border-black";

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

	async function handleSubmit(e) {
		const form = e.target;
		const data = {
			codigo_medico: selectedDoctorCode,
			data: form.data.value,
			horario: form.horario.value,
			nome: form.nome.value,
			email: form.email.value,
			telefone: form.telefone.value
		};
		try {
			const res = await fetch("http://localhost:1999/api/agenda", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});
			alert("Consulta cadastrada com sucesso!");
		} catch (err) {
			console.log(err);
		}
	}

	React.useEffect(() => {
		getSpecialties();
	}, []);

	return (
		<form
			className="w-full max-h-[95%] text-cs flex flex-col font-semibold"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(e);
			}}
		>
			<div className="flex flex-col h-full w-full justify-around items-center">
				<label className="uppercase text-center mb-3 font-bold">
					MARCAR CONSULTA
				</label>
				<label>Especialidade</label>
				<select
					className={input_box_style}
					name="especialidade"
					onChange={(e) => {
						e.preventDefault();
						getDoctors(e);
					}}
				>
					<option hidden selected>
						Especialidade
					</option>
					{specialties.map((specialty) => (
						<option value={specialty}>{specialty}</option>
					))}
				</select>
				<label>Profissional</label>
				<select
					className={input_box_style}
					name="medico_nome"
					onChange={(e) => {
						e.preventDefault();
						setSelectedDoctorCode(e.target.value);
					}}
				>
					<option hidden selected>
						Profissional
					</option>
					{doctors.map((doctor) => (
						<option value={doctor.codigo}>{doctor.nome}</option>
					))}
				</select>
				<label>Data</label>
				<input
					className={input_box_style}
					type="date"
					name="data"
					onChange={(e) => {
						e.preventDefault();
						getOpenSlots(e);
					}}
				/>
				<label>Hor??rio</label>
				<select className={input_box_style} name="horario">
					<option hidden selected>
						Hor??rio
					</option>
					{openSlots.map((slot) => (
						<option value={slot}>{slot + ":00"}</option>
					))}
				</select>
				<label>Nome</label>
				<input
					className={input_box_style}
					type="text"
					name="nome"
					placeholder="Nome"
				/>
				<label>Email</label>
				<input
					className={input_box_style}
					type="text"
					name="email"
					placeholder="Email"
				/>
				<label>Telefone</label>
				<input
					className={input_box_style}
					type="text"
					name="telefone"
					placeholder="Telefone"
				/>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 px-5 shadow hover:bg-[#48dbdb] rounded-2xl w-1/5"
					type="submit"
					value="Submit"
				></input>
			</div>
		</form>
	);
}

export default NewAppointmentForm;
