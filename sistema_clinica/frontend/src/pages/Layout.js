import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function Layout() {
	return (
		<div className="absolute flex flex-col w-full h-full bg-slate-500">
			<div className="w-full h-[10%]">
				<Header />
			</div>
			<div className="w-full h-[5%]">
				<Nav />
			</div>
			<div className="w-full h-[80%]">
				<div className="text-5xl">page</div>
			</div>
			<div className="w-full h-[5%]">
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
