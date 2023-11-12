import React, { useState } from 'react';
import { toastStyleSuccess } from '../../Components/utils/Toastify/toastStyle';
import { toast } from 'react-toastify';
import PrimaryButton from '../../Components/utils/Button/PrimaryButton';
import SEO from '../../Components/MetaTags/SEO';

const generateRandomColor = (format) => {
	const randomColor = {
		hex: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		rgb: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
			Math.random() * 256
		)}, ${Math.floor(Math.random() * 256)})`,
		hsl: `hsl(${Math.floor(Math.random() * 361)}, ${Math.floor(
			Math.random() * 101
		)}%, ${Math.floor(Math.random() * 101)}%)`,
	};
	return randomColor[format];
};

const RandomColor = () => {
	const [colors, setColors] = useState([]);
	const [format, setFormat] = useState('hex');

	const generateColors = () => {
		const newColors = Array.from({ length: 16 }, () =>
			generateRandomColor(format)
		);
		setColors(newColors);
	};

	const handleFormatChange = (newFormat) => {
		setFormat(newFormat);
		generateColors();
	};

	const handleCopy = (colorIndex) => {
		const colorToCopy = colors[colorIndex];

		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(colorToCopy);
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = colorToCopy;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
		}
		toast(`[${colorToCopy}] Copied!`, { style: toastStyleSuccess });
	};

	return (
		<>
			<SEO
				title="Random Colors"
				description="A random color generator online tool generates random colors based on different parameters such as hue, saturation, and brightness. These tools are used by web designers, graphic designers, and artists to create color schemes for their projects. Popular online random color generator tools include Coolors, Random Color Generator by Canva, and Random Color Palette Generator by HTML Color Codes."
				keywords={'random colors'}
				url={'https://www.devtoo1s.dev/colors/random-color'}
			/>
			<div className="p-4 sm:ml-52  max-w-screen overflow-y-auto  max-h-screen">
				<div className=" my-20  max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Random Colors Generator
					</h3>

					<div className="p-4">
						<div className="flex justify-start gap-3 flex-wrap">
							<div className="">
								<PrimaryButton
									onClick={generateColors}
									text={'Generate Colors'}
									className={' text-white px-4 py-2 rounded-md w-full'}
								/>
							</div>
							<div className="mb-4 flex flex-wrap items-center">
								<label className="mr-2 text-lg">Color Format:</label>
								<select
									onChange={(e) => handleFormatChange(e.target.value)}
									value={format}
									className="px-2 py-3 border-none  rounded bg-[#1a1c2e] shadow-md cursor-pointer ring-transparent focus:outline-none min-w-[200px]">
									<option value="hex">HEX</option>
									<option value="rgb">RGB</option>
									<option value="hsl">HSL</option>
								</select>
							</div>
						</div>

						<div className="flex flex-wrap  gap-4 justify-center items-center">
							{colors.map((color, index) => (
								<div
									key={index}
									style={{ backgroundColor: color }}
									className=" px-2 py-10 min-w-[200px]  rounded-md shadow-md text-white text-center cursor-pointer"
									onClick={() => handleCopy(index)}>
									<span className="font-medium">{color}</span>
								</div>
							))}
						</div>
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								A random color generator online tool is a software that
								generates random colors based on different parameters such as
								hue, saturation, and brightness. These tools are commonly used
								by web designers, graphic designers, and artists to create color
								schemes for their projects. With a random color generator tool,
								you can quickly generate a color palette that you can use in
								your designs. Some popular online random color generator tools
								include Colors, Random Color Generator by Canva, and Random
								Color Palette Generator by HTML Color Codes. These tools are
								easy to use and can help you discover new color combinations for
								your projects.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RandomColor;
