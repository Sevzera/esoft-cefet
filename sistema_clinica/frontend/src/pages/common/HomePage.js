import Logo from "../../assets/logo.svg";

function HomePage() {
	return (
		<div className="w-full h-full flex flex-col justify-center">
			<div className="text-center">
				<img src={Logo} alt="logo" className="mx-auto h-44 w-44" />
				<h1 className="mt-[2%] font-inter text-4xl">
					Bem-vindo(a) à Clínica XXX!
				</h1>
				<div className="mt-[1%] mx-auto w-[75%]">
					<p className="font-montserrat text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
						sed lectus vestibulum mattis ullamcorper velit. Tellus integer
						feugiat scelerisque varius morbi. Ut pharetra sit amet aliquam id
						diam maecenas ultricies.
					</p>
				</div>
				<h2 className="mt-[2%] font-inter text-2xl">Nossa missão</h2>
				<div className="mt-[1%] mx-auto w-[75%]">
					<p className="font-montserrat text-center">
						Sit amet facilisis magna etiam. Ut sem nulla pharetra diam sit. Nunc
						id cursus metus aliquam eleifend mi. Porttitor eget dolor morbi non.
						Nam libero justo laoreet sit amet cursus. Pulvinar neque laoreet
						suspendisse interdum consectetur libero id faucibus.
					</p>
				</div>
				<h3 className="mt-[2%] font-inter text-2xl">Nossos valores</h3>
				<div className="mt-[1%] mx-auto w-[75%]">
					<p>
						Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Et
						malesuada fames ac turpis egestas integer eget. Sed ullamcorper
						morbi tincidunt ornare massa eget egestas purus viverra. Sit amet
						est placerat in. Libero nunc consequat interdum varius. Euismod
						elementum nisi quis eleifend.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
