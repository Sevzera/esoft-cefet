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
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<HomePage />} />
					<Route path="galeria" element={<GalleryPage />} />
					<Route path="novo-endereco" element={<NewAddressPage />} />
					<Route path="agendamento" element={<AppointmentPage />} />
					<Route path="login" element={<LoginPage />} />

					<Route path="*" element={<h1>404: NOT FOUND</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
