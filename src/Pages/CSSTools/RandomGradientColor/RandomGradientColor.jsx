import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import { toastStyleSuccess } from '../../../Components/utils/Toastify/toastStyle';

const GradientBox = ({ colors, angle, onClick }) => {
	const gradientColors = colors.join(', ');
	const style = {
		background: `linear-gradient(${angle}deg, ${gradientColors})`,
	};

	return (
		<div
			className="w-full  h-60 cursor-pointer rounded-lg shadow-lg mb-4 p-2 flex justify-center text-center items-center"
			style={style}
			onClick={onClick}>
			{style.background}
		</div>
	);
};

const RandomGradientColor = () => {
	const [gradients, setGradients] = useState([]);

	const generateRandomGradients = () => {
		const newGradients = Array.from({ length: 10 }, () => ({
			colors: [getRandomColor(), getRandomColor()],
			angle: Math.floor(Math.random() * 360),
		}));
		setGradients(newGradients);
	};

	const getRandomColor = () => {
		return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
			Math.random() * 256
		)}, ${Math.floor(Math.random() * 256)})`;
	};

	// use here useEffect
	useEffect(() => {
		generateRandomGradients();
	}, []);

	// handleCopy function to copy the generated gradient colors
	const handleCopy = (gradient) => {
		const gradientColors = `linear-gradient(${
			gradient.angle
		}deg, ${gradient.colors.join(', ')})`;
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(gradientColors);
			toast('Gradient Colors Copied!', { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = gradientColors;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast('Gradient Colors Copied!', { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<Helmet>
				<title>Random Gradient Color Generator</title>
			</Helmet>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2  rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Random Gradient Color Generator
					</h3>
					<div>
						<div className="container mx-auto mt-4">
							<div className="flex justify-center sm:justify-start">
								<PrimaryButton
									onClick={generateRandomGradients}
									text={'Generate Gradients'}
									className={' py-3 w-full sm:w-60'}
								/>
							</div>
							<div className="flex flex-wrap gap-3 mt-4">
								{gradients.map((gradient, index) => (
									<GradientBox
										key={index}
										{...gradient}
										onClick={() => handleCopy(gradient)}
									/>
								))}
							</div>
						</div>
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-200">
								This tool is designed to assist you with your work. It generates
								multiple random gradient colors with a single click, which can
								save you time and effort. The tool also copies the colors for
								you, making it even more convenient. We believe that this tool
								will be an invaluable resource for your development needs.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RandomGradientColor;
