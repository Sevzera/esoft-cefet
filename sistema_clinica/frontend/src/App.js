import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import "./css/style.css";
import HomePage from "./pages/common/HomePage";
import GalleryPage from "./pages/common/GalleryPage";
import NewAddressPage from "./pages/common/NewAddressPage";
import AppointmentPage from "./pages/common/AppointmentPage";
import LoginPage from "./pages/common/LoginPage";
import AdminPage from "./pages/admin/AdminPage";
import NewBlock from "./pages/admin/components/NewBlock";
import ListBlock from "./pages/admin/components/ListBlock";

function App() {
	const [isAdmin, setIsAdmin] = React.useState(true);
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
						element={
							isAdmin ? (
								<AdminPage children={<NewBlock type="funcionario" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/novo-paciente"
						element={
							isAdmin ? (
								<AdminPage children={<NewBlock type="paciente" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/funcionarios"
						element={
							isAdmin ? (
								<AdminPage children={<ListBlock type="funcionario" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/pacientes"
						element={
							isAdmin ? (
								<AdminPage children={<ListBlock type="paciente" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/enderecos"
						element={
							isAdmin ? (
								<AdminPage children={<ListBlock type="endereco" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/consultas"
						element={
							isAdmin ? (
								<AdminPage children={<ListBlock type="agenda" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
