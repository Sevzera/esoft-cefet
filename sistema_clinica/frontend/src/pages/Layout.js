import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout({ user, handleLogout }) {
	return (
		<div className="absolute flex flex-col w-full h-full bg-slate-500">
			<div className="w-full">
				<Header />
			</div>
			<div className="w-full">
				<Nav isLogged={user.isLogged} handleLogout={() => handleLogout()} />
			</div>
			<div className="w-full h-full">
				<Outlet />
			</div>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
