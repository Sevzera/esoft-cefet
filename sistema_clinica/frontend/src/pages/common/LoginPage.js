import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ handleLogin, isLogged }) {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (isLogged) navigate("/admin/lista/consultas");
	}, [isLogged]);

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
				<label>Email</label>
				<input
					className="px-3 py-3 text-sm w-1/6 text-center border-[1px] border-black"
					type="text"
					name="email"
					placeholder="Email"
				/>
				<label>Senha</label>
				<input
					className="px-3 py-3 text-sm w-1/6 text-center border-[1px] border-black"
					type="password"
					name="senha_hash"
					placeholder="Senha"
				/>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 px-5 shadow hover:bg-[#48dbdb] rounded-2xl"
					type="submit"
					value="Submit"
				></input>
			</div>
		</form>
	);
}

export default LoginPage;
