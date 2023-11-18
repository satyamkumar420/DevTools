import React, { useRef, useState } from 'react';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import { toast } from 'react-toastify';
import { toastStyleError } from '../../../Components/utils/Toastify/toastStyle';
import { useDropzone } from 'react-dropzone';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import SEO from '../../../Components/MetaTags/SEO';

const ImageCrop = () => {
	const [image, setImage] = useState(null);
	const [cropper, setCropper] = useState(null);
	const cropperRef = useRef(null);
	const [isFileSelected, setIsFileSelected] = useState(false);

	const onDrop = (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			const fileType = file.type;
			if (fileType.startsWith('image/')) {
				const reader = new FileReader();
				reader.onload = (e) => {
					setImage(e.target.result);
				};
				reader.readAsDataURL(file);
				setIsFileSelected(true);
			} else {
				setImage(null);
				toast('Only image files are accepted', {
					style: toastStyleError,
				});
			}
		}
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	const handleCrop = () => {
		if (cropper) {
			const croppedImage = cropper.getCroppedCanvas({});
			const fileName = `cropped_image_${Math.floor(Math.random() * 100)}.png`;
			const croppedDataURL = croppedImage.toDataURL();
			const link = document.createElement('a');
			link.href = croppedDataURL;
			link.download = fileName;
			link.click();
		}
	};

	// Clear the image
	const clearImage = () => {
		setImage(null);
		setIsFileSelected(false);
	};

	return (
		<>
			<SEO
				title={'Online Free Image Cropper'}
				description={
					'With this tool, you can upload an image and then customize the crop shape by drawing a shape on the image using your mouse or touchpad. The tool provides various shape options such as rectangle, ellipse, polygon, or freehand. You can also adjust the size and position of the shape to fit your desired crop area.'
				}
				keywords={
					'online free image cropper, custom, image, cropper, custom logo crop, crop, logo, crop, logo crop, images, image,image-cropper'
				}
				url={'https://www.devtoo1s.dev/image/images-crop'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Custom Size Image Crop
					</h3>
					<div className="container mx-auto  my-8 max-w-xl">
						{isFileSelected ? null : (
							<div
								{...getRootProps()}
								className="p-6 items-center flex justify-center cursor-pointer bg-[#1a1c2e] h-52 border-2 rounded-md border-pink-600 py-14 border-dashed ">
								<input {...getInputProps()} accept="image/*" />
								<p>
									Drag and drop an image file here, or click to select a file.
								</p>
							</div>
						)}
						{image && (
							<>
								<div className="border-2 border-dashed border-pink-500 p-4 my-5 shadow-2xl bg-[#1a1c2e]">
									<Cropper
										ref={cropperRef}
										src={image}
										style={{
											height: 'auto',
											width: '99%',
											margin: 'auto',
											zIndex: 0,
											maxHeight: '400px',
										}}
										dragMode="move"
										scalable={true}
										cropBoxResizable={true}
										cropBoxMovable={true}
										crop={(e) => {
											// You can add custom crop event handling if needed
										}}
										onInitialized={(instance) => {
											setCropper(instance);
										}}
										crossOrigin="anonymous"
									/>
								</div>
								<div className="flex gap-4 flex-wrap">
									<PrimaryButton
										onClick={handleCrop}
										text="Save Image"
										className={'py-2 sm:w-40'}
									/>
									<PrimaryButton
										onClick={clearImage}
										text="Clear Image"
										className={'py-2 sm:w-40 bg-orange-700 hover:bg-orange-800'}
									/>
								</div>
							</>
						)}
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								Devtools.dev offers an online free custom image cropper tool
								that allows you to crop an image to your desired shape. This
								tool is particularly useful for web developers and graphic
								designers who need to create images with custom shapes.
							</p>

							<p className="text-blue-300 mt-2">
								Overall, the custom image cropper tool in devtoo1s.dev is a
								convenient and easy-to-use tool for web developers and graphic
								designers who need to create images with custom shapes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageCrop;
