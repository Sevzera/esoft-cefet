function CommonPage({ children }) {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			{children}
		</div>
	);
}

export default CommonPage;
