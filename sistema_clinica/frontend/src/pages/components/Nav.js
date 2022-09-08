import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="flex flex-row justify-around w-full h-full bg-stone-500">
			<div className="flex flex-row justify-around items-center w-11/12">
				<Link to="/home">Home</Link>
				<Link to="/galeria">Galeria</Link>
				<Link to="/novo-endereco">Novo Endereço</Link>
				<Link to="/agendamento">Agendamento</Link>
			</div>
			<div className="flex flex-col justify-end items-center w-1/12">
				<Link to="/login">Login</Link>
				<Link to="/admin" className="invisible">
					Admin
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
