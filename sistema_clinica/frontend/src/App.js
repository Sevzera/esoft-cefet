import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import "./css/style.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
