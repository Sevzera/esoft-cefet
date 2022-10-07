import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import "./css/style.css";
import CommonPage from "./pages/common/CommonPage";
import Home from "./pages/common/components/Home";
import Gallery from "./pages/common/components/Gallery";
import NewAddressForm from "./pages/common/components/NewAddressForm";
import NewAppointmentForm from "./pages/common/components/NewAppointmentForm";
import LoginForm from "./pages/common/components/LoginForm";
import AdminPage from "./pages/admin/AdminPage";
import ListBlock from "./pages/admin/components/ListBlock";
import NewEmployeeForm from "./pages/admin/components/NewEmployeeForm";
import NewPatientForm from "./pages/admin/components/NewPatientForm";

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
					<Route path="home" element={<CommonPage children={<Home />} />} />
					<Route
						path="galeria"
						element={<CommonPage children={<Gallery />} />}
					/>
					<Route
						path="novo-endereco"
						element={<CommonPage children={<NewAddressForm />} />}
					/>
					<Route
						path="agendamento"
						element={<CommonPage children={<NewAppointmentForm />} />}
					/>
					<Route
						path="login"
						element={
							<CommonPage
								children={
									<LoginForm
										handleLogin={(e) => handleLogin(e)}
										isLogged={user.isLogged}
									/>
								}
							/>
						}
					/>
					<Route
						path="admin/novo-funcionario"
						element={
							user.isLogged ? (
								<AdminPage children={<NewEmployeeForm />} />
							) : (
								<h1>ACESSO RESTRITO</h1>
							)
						}
					/>
					<Route
						path="admin/novo-paciente"
						element={
							user.isLogged ? (
								<AdminPage children={<NewPatientForm />} />
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
