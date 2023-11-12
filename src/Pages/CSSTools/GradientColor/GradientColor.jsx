import React, { useState, useRef } from 'react';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import { toastStyleSuccess } from '../../../Components/utils/Toastify/toastStyle';
import SEO from '../../../Components/MetaTags/SEO';

const GradientColor = () => {
	const [direction, setDirection] = useState('to left');
	const [color1, setColor1] = useState('#2522e2');
	const [color2, setColor2] = useState('#c2410c');
	const gradientBoxRef = useRef(null);

	const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

	const handleDirectionChange = (newDirection) => {
		setDirection(newDirection);
	};

	const handleColorChange = (color, setColor) => {
		return (e) => setColor(e.target.value);
	};

	const handleCopy = () => {
		const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(gradient);
			toast('Gradient Color Copied!', { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = gradient;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast('Gradient Color Copied!', { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<SEO
				title={'Gradient Color Picker'}
				description={`	The Gradient Color Generator is an incredibly useful web-based
					tool that assists users in generating custom CSS gradients for
					their web design and development projects. This tool features a
					user-friendly interface that allows users to easily select the
					gradient direction and choose two colors, color1 and color2. The
					generator seamlessly transitions between the two colors to
					provide a beautiful gradient effect that is perfect for any web
					project. Additionally, the tool provides a convenient copy
					feature that allows users to easily copy the generated gradient
					code with just one click.`}
				keywords={
					'gradient color picker, gradient color, css gradient color picker, css gradient color'
				}
				url={'https://www.devtools.dev/colors/gradient-color'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Gradient Color Picker
					</h3>
					<div className="bg-[#1a1c2e] p-4 my-3 rounded-md">
						<p className="sm:text-xl text-lg bg-[#22253e] p-2 rounded-md my-2  font-medium text-center sm:text-left text-gray-100">
							Choose Direction
						</p>
						<div className="flex gap-2 mb-4 justify-center sm:justify-start flex-wrap">
							{[
								'to top',
								'to bottom',
								'to right',
								'to left',
								'to top right',
								'to top left',
								'to bottom right',
								'to bottom left',
							].map((dir) => (
								<div className="my-1" key={dir}>
									<PrimaryButton
										onClick={() => handleDirectionChange(dir)}
										text={dir}
										className={`py-2  hover:bg-orange-700 ${
											direction === dir ? 'bg-orange-700' : ''
										}`}
									/>
								</div>
							))}
						</div>
						<p className="text-lg sm:text-xl bg-[#22253e] p-2 rounded-md my-2  font-medium text-center sm:text-left text-gray-100">
							Pick the Colors
						</p>
						<div className="flex gap-3 justify-center sm:justify-start flex-wrap">
							{[
								{ label: 'Color 1', color: color1, setColor: setColor1 },
								{ label: 'Color 2', color: color2, setColor: setColor2 },
							].map((colorData, index) => (
								<div className="text-center " key={index}>
									<p className="text-gray-100 font-bold">{colorData.label}</p>
									<input
										type="color"
										value={colorData.color}
										onChange={handleColorChange(
											colorData.color,
											colorData.setColor
										)}
										className="w-52 sm:w-60 h-20 rounded-md"
									/>
								</div>
							))}
						</div>
						<div
							ref={gradientBoxRef}
							className="w-full h-52 p-5 rounded-md mt-4 flex items-center cursor-pointer"
							style={{
								background: `linear-gradient(${direction}, ${color1}, ${color2})`,
							}}
							onClick={handleCopy}>
							<div className="text-lg mx-auto text-white">{gradient}</div>
						</div>
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								The Gradient Color Generator is an incredibly useful web-based
								tool that assists users in generating custom CSS gradients for
								their web design and development projects. This tool features a
								user-friendly interface that allows users to easily select the
								gradient direction and choose two colors, color1 and color2. The
								generator seamlessly transitions between the two colors to
								provide a beautiful gradient effect that is perfect for any web
								project. Additionally, the tool provides a convenient copy
								feature that allows users to easily copy the generated gradient
								code with just one click.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GradientColor;
