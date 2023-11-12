import React, { useState } from 'react';
import QRCode from 'qrcode';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import { toastStyleError } from '../../../Components/utils/Toastify/toastStyle';
import QrImage from '../../../assets/qrcode.png';
import SEO from '../../../Components/MetaTags/SEO';

const QrCodeGenerator = () => {
	const [textInput, setTextInput] = useState('');
	const [qrCodeUrl, setQRCodeUrl] = useState('');

	const generateQRCode = async () => {
		try {
			if (textInput) {
				const qrCodeUrl = await QRCode.toDataURL(textInput, {
					width: 300,
					height: 300,
				});
				setQRCodeUrl(qrCodeUrl);
			} else {
				toast('Enter a valid text or URL', { style: toastStyleError });
			}
		} catch (error) {
			toast('An error occurred while generating the QR code', {
				style: toastStyleError,
			});
		}
	};

	const downloadQRCode = () => {
		if (qrCodeUrl) {
			const link = document.createElement('a');
			link.download = 'qrcode.png';
			link.href = qrCodeUrl;
			link.click();
		}
	};

	return (
		<>
			<SEO
				title={'Online Free QR Code Generator Tools'}
				description={
					'Online free QR code generator tools are web-based applications that enable users to create QR (Quick Response) codes. QR codes are two-dimensional barcodes that can store various types of information, such as website URLs, contact details, or plain text. These tools typically allow users to input the desired information and generate a unique QR code. Users can then download or share the generated QR code for use in various applications, including marketing materials, business cards, or product packaging.'
				}
				keywords={
					'QR Code Generator, QR Code Generator Tools, Qr code generator, qr code, free qr code generator, online qr code generator, text to qr code, text to qr, text to qr code generator, text to qr code generator tools, text to qr code generator online, text to qr code generator free'
				}
				url={'https://www.devtoo1s.dev/various-tools/qr-code-generator'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						QR Code Generator
					</h3>
					<div className="my-5 max-w-lg">
						<div>
							<input
								type="text"
								placeholder="Enter text or URL to generate QR code"
								value={textInput}
								onChange={(e) => setTextInput(e.target.value)}
								className="p-2 rounded-md outline-none w-full  sm:max-w-lg border-2 border-gray-400 bg-slate-900 focus:border-blue-600"
							/>
							<div className="mt-4 flex justify-center sm:justify-start">
								<PrimaryButton
									onClick={generateQRCode}
									text={'Generate QR code'}
									className={'py-2 w-60'}
								/>
							</div>
						</div>
						<div className="my-5 mx-auto flex justify-center">
							{qrCodeUrl ? (
								<img
									src={qrCodeUrl}
									alt="QR code"
									width={300}
									height={300}
									className="rounded-lg shadow-md shadow-blue-500"
								/>
							) : (
								<img
									src={QrImage}
									alt="QR code"
									width={300}
									height={300}
									className="rounded-lg shadow-md shadow-blue-500 disabled:cursor-not-allowed opacity-50"
								/>
							)}
						</div>

						{qrCodeUrl && (
							<div className="flex justify-center">
								<PrimaryButton
									onClick={downloadQRCode}
									text={'Download QR code'}
									className={'py-2 w-60'}
								/>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								QR Code Generator: Create QR Codes for Text, URLs, and More -
								User-Friendly Interface - Download as PNG Generate QR codes with
								ease using our QR Code Generator. QR code can store text, URLs,
								or contact information. Our user-friendly application allows you
								to quickly create QR codes for various purposes. Simply input
								your desired text or URL, and watch as the app generates your QR
								code in real-time. You can also download the QR code as a PNG
								image for offline use. Simplify your QR code needs with our
								efficient and accessible tool.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QrCodeGenerator;
