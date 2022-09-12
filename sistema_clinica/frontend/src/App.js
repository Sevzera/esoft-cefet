import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import "./css/style.css";
import HomePage from "./pages/common/HomePage";
import GalleryPage from "./pages/common/GalleryPage";
import NewAddressPage from "./pages/common/NewAddressPage";
import AppointmentPage from "./pages/common/AppointmentPage";
import LoginPage from "./pages/common/LoginPage";

function App() {
	const [isAdmin, setIsAdmin] = React.useState(false);
	const [isDoctor, setIsDoctor] = React.useState(false);

	async function handleLogin(e) {}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout isAdmin={isAdmin} />}>
					<Route path="home" element={<HomePage />} />
					<Route path="galeria" element={<GalleryPage />} />
					<Route path="novo-endereco" element={<NewAddressPage />} />
					<Route path="agendamento" element={<AppointmentPage />} />
					<Route
						path="login"
						element={<LoginPage handleLogin={(e) => handleLogin(e)} />}
					/>
					<Route
						path="admin/novo-funcionario"
						element={isAdmin ? <div></div> : <h1>ACESSO RESTRITO</h1>}
					/>
					<Route
						path="admin/novo-paciente"
						element={isAdmin ? <div></div> : <h1>ACESSO RESTRITO</h1>}
					/>
					<Route
						path="admin/lista/funcionarios"
						element={isAdmin ? <div></div> : <h1>ACESSO RESTRITO</h1>}
					/>
					<Route
						path="admin/lista/pacientes"
						element={isAdmin ? <div></div> : <h1>ACESSO RESTRITO</h1>}
					/>
					<Route
						path="admin/lista/enderecos"
						element={isAdmin ? <div></div> : <h1>ACESSO RESTRITO</h1>}
					/>
					<Route
						path="admin/lista/consultas"
						element={isAdmin ? <div></div> : <h1>ACESSO RESTRITO</h1>}
					/>
					<Route path="*" element={<h1>404: NOT FOUND</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
