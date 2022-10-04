import { Link } from "react-router-dom";

function Nav({ isLogged }) {
	return (
		<nav className="flex flex-row text-xl justify-around w-full h-full rounded-b-lg py-2 border-t-2 border-white bg-[#48dbdb]">
			{isLogged ? (
				<div className="flex flex-row justify-around items-center w-11/12">
					<Link to="admin/novo-funcionario">Cadastrar funcionario</Link>
					<Link to="admin/novo-paciente">Cadastrar paciente</Link>
					<Link to="admin/lista/funcionarios">Funcionarios</Link>
					<Link to="admin/lista/pacientes">Pacientes</Link>
					<Link to="admin/lista/enderecos">Enderecos</Link>
					<Link to="admin/lista/consultas">Consultas</Link>
				</div>
			) : (
				<div className="flex flex-row justify-around items-center w-11/12">
					<Link to="/home">Home</Link>
					<Link to="/galeria">Galeria</Link>
					<Link to="/novo-endereco">Cadastrar Endereço</Link>
					<Link to="/agendamento">Agendamento</Link>
				</div>
			)}
			<div className="flex flex-col justify-end items-center w-1/12">
				{isLogged ? (
					<Link to="/home" onClick={() => handleLogout}>
						Logout
					</Link>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</nav>
	);
}

export default Nav;
