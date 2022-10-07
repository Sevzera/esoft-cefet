import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout({ user, handleLogout }) {
	return (
		<div className="absolute flex flex-col w-full h-full bg-white">
			<div className="w-full h-[10%]">
				<Header />
			</div>
			<div className="w-full h-[5%]">
				<Nav isLogged={user.isLogged} handleLogout={() => handleLogout()} />
			</div>
			<div className="w-full h-[80%]">
				<Outlet />
			</div>
			<div className="w-full h-[5%]">
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
