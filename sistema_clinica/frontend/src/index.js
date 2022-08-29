import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);
