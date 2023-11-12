import React, { useState } from 'react';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import {
	toastStyleSuccess,
	toastStyleError,
} from '../../../Components/utils/Toastify/toastStyle';
import TextArea from '../../../Components/utils/textArea/TextArea';
import SEO from '../../../Components/MetaTags/SEO';

function Base64Encoder() {
	const [text, setText] = useState('');
	const [base64, setBase64] = useState('');

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const encodeToBase64 = () => {
		// check if text is empty
		if (text.trim() === '') {
			toast('Please Enter a Text!', { style: toastStyleError });
			return;
		}
		const base64String = btoa(text);
		setBase64(base64String);
	};

	// handleCopy function to copy the generated token
	const handleCopy = () => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(base64);
			toast('Base64 encoded data copied!', { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = base64;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast('Base64 encoded data copied!', { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<SEO
				title={'Online Free Base64 Encoder Tools'}
				description={
					'Online free Base64 encoder tools are web-based applications that convert binary or text data into Base64 encoding. Base64 encoding is a method of encoding binary data by representing it using a set of ASCII characters. These tools take input data, such as a file or text, and generate a Base64-encoded output. This encoding is commonly used in web development, data transmission, and other applications where binary data needs to be represented as plain text.'
				}
				keywords={
					'base64, base64 encoder, base64 encode, base64 code, base64 code encoder, base64 text encoder, base64 text encoder free, base64 text encoder online'
				}
				url={'https://www.devtoo1s.dev/various-tools/base64-encoder'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Text to Base64 Encoder
					</h3>
					<div className="w-full   mt-5 p-4 bg-[#1a1c2e] shadow-md rounded-md">
						<h1 className="text-sm text-gray-400 mb-1">
							Text to Base64 Encoder
						</h1>
						<div className="mb-2">
							<TextArea
								Value={text}
								OnChange={handleTextChange}
								Placeholder={'Enter Text Here'}
							/>
						</div>
						<PrimaryButton
							text={'Encode base64'}
							onClick={encodeToBase64}
							className={`text-white px-4 py-2 rounded-md w-full sm:w-60 `}
						/>

						{base64 && (
							<div className="mt-4 break-words">
								<p className="text-medium font-medium sm:text-lg text-orange-500">
									Encoded Base64:{' '}
								</p>
								<pre className="mb-2 sm:text-lg  text-left bg-[#202236] rounded-md py-3 px-4 break-words shadow-md">
									{base64}
								</pre>
								<PrimaryButton
									text={'Copy Encoded Base64'}
									onClick={handleCopy}
									className={' text-white px-4 py-2 rounded-md w-full sm:w-60 '}
								/>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="border-l-4 text-left border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								Base64 is a simple and effective encoding algorithm that can
								convert any character, including emojis and images, into a
								readable string. The Base64 tool makes it easy to encode and
								copy text with a single click. This encoding algorithm uses
								Latin letters, digits, plus, and slash to represent any
								character, ensuring that even Chinese characters can be
								converted and read.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Base64Encoder;
