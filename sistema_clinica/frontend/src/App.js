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
	const [user, setUser] = React.useState({
		isLogged: false,
		crm: false
	});

	async function handleLogin(e) {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const senha_hash = form.senha_hash.value;
		const res = await fetch(
			"http://localhost:1999/api/funcionario/?spec=login" +
				`&email=${email}&senha_hash=${senha_hash}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		const result = await res.json();
		if (result) {
			alert("Login efetuado com sucesso!");
			setUser({
				isLogged: true,
				crm: result.crm || false
			});
		} else {
			alert("Login falhou!");
		}
	}

	async function handleLogout() {
		setUser({
			isLogged: false,
			crm: false
		});
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout handleLogout={() => handleLogout()} user={user} />}
				>
					<Route path="home" element={<HomePage />} />
					<Route path="galeria" element={<GalleryPage />} />
					<Route path="novo-endereco" element={<NewAddressPage />} />
					<Route path="agendamento" element={<AppointmentPage />} />
					<Route
						path="login"
						element={
							<LoginPage
								handleLogin={(e) => handleLogin(e)}
								isLogged={user.isLogged}
							/>
						}
					/>
					<Route
						path="admin/novo-funcionario"
						element={
							user.isLogged ? (
								<AdminPage children={<NewBlock type="funcionario" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/novo-paciente"
						element={
							user.isLogged ? (
								<AdminPage children={<NewBlock type="paciente" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/funcionarios"
						element={
							user.isLogged ? (
								<AdminPage children={<ListBlock type="funcionario" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/pacientes"
						element={
							user.isLogged ? (
								<AdminPage children={<ListBlock type="paciente" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/enderecos"
						element={
							user.isLogged ? (
								<AdminPage children={<ListBlock type="endereco" />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/lista/consultas"
						element={
							user.isLogged ? (
								<AdminPage
									children={<ListBlock type="agenda" crm={user.crm} />}
								/>
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
