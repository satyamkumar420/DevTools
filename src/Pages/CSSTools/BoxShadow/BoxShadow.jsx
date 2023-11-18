import React, { useState } from 'react';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import { toastStyleSuccess } from '../../../Components/utils/Toastify/toastStyle';
import SEO from '../../../Components/MetaTags/SEO';

const RandomBoxShadowGenerator = () => {
	const [boxShadows, setBoxShadows] = useState([
		'7px -10px 20px rgb(13,8,182)',
	]);

	const generateRandomBoxShadows = () => {
		// Generate 10 random box shadows.
		const newBoxShadows = Array.from({ length: 12 }, () => {
			const randomXOffset = `${getRandomValue(-10, 10)}px`;
			const randomYOffset = `${getRandomValue(-10, 10)}px`;
			const randomBlur = `${getRandomValue(0, 20)}px`;
			const randomColor = getRandomColor();
			return `${randomXOffset} ${randomYOffset} ${randomBlur} ${randomColor}`;
		});
		setBoxShadows(newBoxShadows);
	};

	// Function to get a random value within a given range.
	const getRandomValue = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// Function to generate a random color in RGB format.
	const getRandomColor = () => {
		const r = getRandomValue(0, 255);
		const g = getRandomValue(0, 255);
		const b = getRandomValue(0, 255);
		return `rgb(${r},${g},${b})`;
	};

	// handle Copy generated shadow box
	const handleCopy = (boxShadow) => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(boxShadow);
			toast('Box Shadows Copied!', { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = boxShadow;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast('Box Shadows Copied!', { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<SEO
				title={'Box Shadow Generator'}
				description={
					'Devtoo1s.dev offers a free online Color Converter tool that allows you to convert colors between different formats. With this tool, you can easily convert colors from RGB to HEX, HSL, and HSV. This is particularly useful for web developers and designers who need to work with different color formats for their projects. The tool is user-friendly and provides you with the converted color code in the format of your choice. You can use this code in your design work or copy it to your clipboard for later use. Best of all, it is completely free to use on devtoo1s.dev.'
				}
				keywords={
					'box shadow generator, box shadow generator tool, box shadow generator tool'
				}
				url={'https://devtoo1s.dev/colors/box-shadow'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto  max-h-screen">
				<div className=" my-20  max-w-screen-xl">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Box Shadow Generator
					</h3>
					<div className="my-3 flex justify-center sm:justify-start">
						<PrimaryButton
							onClick={generateRandomBoxShadows}
							text={'Generate'}
							className={'w-full mx-5 sm:w-48 py-2'}
						/>
					</div>
					<div className="text-center flex flex-wrap justify-center sm:justify-start ">
						{boxShadows.map((boxShadow, index) => (
							<div
								key={index}
								className="sm:w-40 w-full h-40 bg-slate-800 m-5 p-2 justify-center flex items-center rounded-md cursor-pointer"
								style={{ boxShadow }}
								onClick={() => handleCopy(boxShadow)}>
								<p>{boxShadow}</p>
							</div>
						))}
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								The shadow box generator is an incredibly useful tool that
								allows you to create a box-shaped element with an impressive
								shadow effect in just one click. This tool streamlines the
								process of creating a shadow box by automatically generating the
								necessary code. By making use of this tool, you can save
								yourself the time and hassle of coding a shadow box element from
								scratch. Simply adjust the settings to your liking, click the
								generate button, and copy the code. It's that simple! By using
								this tool, you'll be able to create stunning shadow boxes with
								ease, without having to worry about the complexities of coding.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RandomBoxShadowGenerator;
