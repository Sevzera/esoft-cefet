function LoginPage({ handleLogin }) {
	return (
		<form
			className="w-full h-full text-cs flex flex-col font-semibold"
			onSubmit={(e) => {
				e.preventDefault();
				handleLogin(e);
			}}
		>
			{" "}
			<div className="flex flex-col h-full w-full justify-center items-center">
				<label className="uppercase text-center mb-3 font-bold">LOGIN</label>
				<label>Nome</label>
				<input
					className="px-3 py-3 text-sm w-1/6 text-center"
					type="text"
					name="nome"
					placeholder="Nome"
				/>
				<label>Email</label>
				<input
					className="px-3 py-3 text-sm w-1/6 text-center"
					type="text"
					name="email"
					placeholder="Email"
				/>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 px-5 shadow hover:bg-[#1e293b] hover:text-white rounded-2xl"
					type="submit"
					value="Submit"
				></input>
			</div>
		</form>
	);
}

export default LoginPage;
