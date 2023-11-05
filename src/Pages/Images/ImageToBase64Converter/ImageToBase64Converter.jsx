import React, { useState } from 'react';
import {
	toastStyleError,
	toastStyleSuccess,
} from '../../../Components/utils/Toastify/toastStyle';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { useDropzone } from 'react-dropzone';

const ImageToBase64Converter = () => {
	const [base64Image, setBase64Image] = useState('');
	const [isSelectedFile, setIsSelectedFile] = useState(null);

	const convertToBase64 = (file) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			setBase64Image(reader.result);
		};
		reader.readAsDataURL(file);
		setIsSelectedFile(file);
	};

	const onDrop = (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			if (file.type.includes('image')) {
				convertToBase64(file);
			} else {
				setIsSelectedFile(null);
				setBase64Image('');
				toast('Please drop an image file.', { style: toastStyleError });
			}
		}
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	const handleCopy = () => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(base64Image);
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = base64Image;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
		}
		toast('Image Encoded Data Copied!', { style: toastStyleSuccess });
	};

	return (
		<>
			<Helmet>
				<title>Image To Base64</title>
			</Helmet>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20  max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Image To Base64 Converter
					</h3>
					<div className="container mx-auto  my-8 max-w-xl">
						{isSelectedFile ? null : (
							<div
								{...getRootProps()}
								className="p-6 items-center flex justify-center cursor-pointer bg-[#1a1c2e] h-52 border-2 rounded-md border-pink-600 py-14 border-dashed">
								<input {...getInputProps()} accept="image/*" />
								<p>
									Drag and drop an image file here, or click to select a file.
								</p>
							</div>
						)}
						{base64Image && (
							<div className="my-4">
								<h2 className="text-lg font-semibold">Base64 Encoded Image:</h2>
								<textarea
									value={base64Image}
									readOnly
									className="w-full p-2 mt-2 rounded-md outline-none border-2 border-gray-600 focus:border-blue-600 bg-[#141522] text-white resize-none"
									autoComplete="off"
									rows={8}
								/>
								<div>
									<PrimaryButton
										onClick={handleCopy}
										text={'Copy'}
										className={
											'text-white px-4 py-2 rounded-md w-full sm:w-60 mt-2'
										}
									/>
								</div>
							</div>
						)}
						{isSelectedFile && (
							<div className="my-4">
								<h2 className="text-lg font-semibold my-2">Selected Image:</h2>
								<div className="overflow-hidden border-2 max-w-fit border-dashed border-pink-500 p-4 rounded">
									<img
										src={URL.createObjectURL(isSelectedFile)}
										alt="Selected"
										className=" max-h-screen  rounded shadow-md"
									/>
								</div>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								Converting an image to base64 can be a complex task, but have no
								fear! This powerful tool makes it easy and stress-free.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageToBase64Converter;
