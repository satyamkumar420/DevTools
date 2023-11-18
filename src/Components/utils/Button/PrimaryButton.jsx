const PrimaryButton = ({ onClick, text, className, disabled }) => {
	return (
		<button
			className={`bg-blue-600 shadow-md text-white sm:text-lg font-normal hover:bg-blue-800 transition-all ease-in-out rounded-md py-2 px-4 ${className}`}
			onClick={onClick}
			disabled={disabled}
			type="button">
			{text}
		</button>
	);
};

export default PrimaryButton;
