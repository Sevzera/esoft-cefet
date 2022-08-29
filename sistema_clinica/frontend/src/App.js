import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./css/style.css";

function App() {
	return (
		<BrowserRouter>
			<Link to="/">Main page</Link>
			<Routes>
				<Route path="/" element={<React.Component /*PLACEHOLDER*/ />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
