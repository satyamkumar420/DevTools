import React, { useState, useCallback, useEffect } from 'react';
import useEyeDropper from 'use-eye-dropper';
import { toast } from 'react-toastify';
import {
	toastStyleError,
	toastStyleSuccess,
} from '../../Components/utils/Toastify/toastStyle';
import { useDropzone } from 'react-dropzone';
import PrimaryButton from './../../Components/utils/Button/PrimaryButton';
import SEO from '../../Components/MetaTags/SEO';

const ImageColorPicker = () => {
	const [imageSrc, setImageSrc] = useState(null);
	const { open, close, isSupported } = useEyeDropper();
	const [color, setColor] = useState('');
	const [colorHistory, setColorHistory] = useState([]);
	const [isFileSelected, setIsFileSelected] = useState(false);

	// Load color history from local storage if it exists
	useEffect(() => {
		const storedColorHistory = localStorage.getItem('colorHistory');
		if (storedColorHistory) {
			setColorHistory(JSON.parse(storedColorHistory));
		}
	}, []);

	// Save color history to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem('colorHistory', JSON.stringify(colorHistory));
	}, [colorHistory]);

	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		if (file) {
			// Check if the file type is an image (you can modify this check to include additional image types)
			if (file.type.startsWith('image/')) {
				const fileURL = URL.createObjectURL(file);
				setImageSrc(fileURL);
				setIsFileSelected(true);
			} else {
				// Show a toast or an alert for non-image file types
				toast('Only image files are accepted', {
					style: toastStyleError,
				});
			}
		}
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	const pickColor = useCallback(async () => {
		try {
			const pickedColor = await open();
			const sRGBHexColor = pickedColor.sRGBHex;
			// Update color state
			setColor(sRGBHexColor);
			// Add picked color to history
			setColorHistory([...colorHistory, sRGBHexColor]);
		} catch (e) {
			// return none
		}
	}, [open, colorHistory]);

	const copyColorToClipboard = (color) => {
		if (color) {
			navigator.clipboard.writeText(color);
			toast(`[${color}] Copied!`, { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = color;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast(`[${color}] Copied!`, { style: toastStyleSuccess });
		}
	};

	// Clear the image
	const clearImage = () => {
		setImageSrc(null);
		setIsFileSelected(false);
	};

	// Clear COlor History
	const clearColorHistory = () => {
		setColorHistory([]);
	};

	return (
		<>
			<SEO
				title="Image Color Picker"
				description="Online image color picker tools are web-based software that allows you to select colors from an image without downloading any software. These tools are particularly useful for those who don't have access to image editing software and need to identify colors used in an image. Some popular online image color picker tools include Canva Color Palette Generator, Image Color Picker by HTML Color Codes, and Colormind. These tools are easy to use and help you identify colors accurately."
				keywords={'image color picker'}
				url={'https://www.devtoo1s.dev/colors/image-color-picker'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto  max-h-screen">
				<div className=" my-20  max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Image Color Picker
					</h3>
					<div className="mt-4">
						{isFileSelected ? (
							<div className="my-4">
								<div className="border-2 border-pink-500 border-dashed  items-center justify-center flex w-fit">
									<img
										src={imageSrc}
										alt="Selected"
										className="max-h-96 max-w-full p-5 "
									/>
								</div>
								<div className="mt-5 flex gap-4 flex-wrap">
									<PrimaryButton
										onClick={pickColor}
										className="py-2 sm:w-40"
										text={'Pick Color'}
									/>
									<PrimaryButton
										onClick={clearImage}
										className={'py-2 sm:w-40 bg-orange-700 hover:bg-orange-800'}
										text={'Clear Image'}
									/>
								</div>
							</div>
						) : (
							<div className="container mx-auto  my-8 max-w-xl">
								<div
									{...getRootProps()}
									className="p-6 items-center flex justify-center cursor-pointer bg-[#1a1c2e] h-52 border-2 rounded-md border-pink-600 py-14 border-dashed">
									<input {...getInputProps()} accept="image/*" />
									<p>
										Drag and drop an image file here, or click to select a file.
									</p>
								</div>
							</div>
						)}
						{color && (
							<div className="mt-4">
								<h3 className="text-lg text-gray-400 sm:text-xl">
									Selected Color History
								</h3>
								<div className="mt-4 flex flex-wrap gap-3">
									{colorHistory.map((color, index) => (
										<div
											className="w-36 h-28 cursor-pointer rounded justify-center items-center text-center flex shadow-md"
											style={{ backgroundColor: color }}
											key={index}
											onClick={() => copyColorToClipboard(color)}>
											<div>{color}</div>
										</div>
									))}
								</div>
								<PrimaryButton
									onClick={clearColorHistory}
									className={
										'py-2 mt-5 sm:w-40 bg-orange-700 hover:bg-orange-800'
									}
									text={'Clear Color'}
								/>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								Online image color picker tools are web-based software that
								allows you to select colors from an image without downloading
								any software. These tools are particularly useful for those who
								don't have access to image editing software and need to identify
								colors used in an image. Some popular online image color picker
								tools include Canva Color Palette Generator, Image Color Picker
								by HTML Color Codes, and Colormind. These tools are easy to use
								and help you identify colors accurately.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageColorPicker;
