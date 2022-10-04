import Logo from "../../assets/logo.svg";

function Header() {
	return (
		<header className="flex flex-row w-full h-full p-2 bg-[#48dbdb]">
			<img src={Logo} alt='logo' />
			<div className="text-5xl my-auto ml-5">Clínica XXX</div>
		</header>
	);
}

export default Header;
