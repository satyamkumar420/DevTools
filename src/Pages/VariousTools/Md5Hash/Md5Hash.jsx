import { useState } from 'react';
import md5 from 'md5';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import {
	toastStyleSuccess,
	toastStyleError,
} from '../../../Components/utils/Toastify/toastStyle';
import TextArea from '../../../Components/utils/textArea/TextArea';
import { IconCopy } from '../../../Components/Icons/Icons';
import SEO from '../../../Components/MetaTags/SEO';

const Md5Hash = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const generateMD5 = () => {
		if (input.trim() === '') {
			toast('Please Enter a Text!', { style: toastStyleError });
			return;
		}

		const hash = md5(input);
		setOutput(hash);
	};

	// handle Copy function to copy the generated hash
	const handleCopyMd5Hash = () => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(output);
			toast('MD5 Hash Copied!', { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = output;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast('MD5 Hash Copied!', { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<SEO
				title={'Online Free MD5 Hash Encoder Tools'}
				description={
					'Online free MD5 hash encoder tools are web-based applications that generate MD5 hash values for input text or data. MD5 (Message Digest Algorithm 5) is a widely used cryptographic hash function that produces a fixed-size output (128-bit hash value), typically represented as a hexadecimal number. These tools are useful for generating MD5 hashes quickly and conveniently, often employed in various security and integrity verification applications. Users input their data, and the tool processes it to produce the corresponding MD5 hash.'
				}
				keywords={
					'md5 hash encoder, md5 hash, text to md5 hash, md5 hash online encoder, md5 hash online'
				}
				url={'https://www.devtoo1s.dev/various-tools/md5-hash'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						MD5 Hash Generator
					</h3>
					<div className="container mx-auto mt-5">
						<div className=" gap-3">
							<div className="">
								<TextArea
									Value={input}
									OnChange={handleInputChange}
									Placeholder={'Enter Text Here'}
								/>
								<div className="mt-2">
									<PrimaryButton
										onClick={generateMD5}
										text={'Generate MD5 Hash'}
										className={
											' text-white px-4 py-2 rounded-md w-full sm:w-60 '
										}
									/>
								</div>
							</div>
						</div>
						<div className="mt-4">
							{output && (
								<div>
									<div className="text-gray-400 text-lg font-medium">
										MD5 Hash:
									</div>
									<div className="flex py-3 w-fit px-2 sm:px-4 rounded-md bg-[#1a1c2e] items-center">
										<pre className="mr-4 text-blue-100  ">{output}</pre>
										<div className="ml-auto">
											<IconCopy
												className="sm:w-7 sm:h-7 cursor-pointer text-green-400"
												onClick={handleCopyMd5Hash}
											/>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								Our Hash Code Generator makes it easy for you to calculate the
								MD5 hash of any text you like! MD5 (Message Digest Algorithm 5)
								is a widely used cryptographic hash algorithm that generates a
								unique 32-character fingerprint for any input text or data. It's
								awesome for checking data integrity because it produces a
								constant hash, no matter the size of the input data. This means
								that even tiny alterations in the file will change the code,
								making it easy to identify any changes made to the original
								data. MD5 is also great for encrypting passwords in some
								authentication systems, but we recommend using more secure
								algorithms like SHA-256 for such purposes. All you have to do is
								input the text and click on the 'Calculate MD5 Hash' button.
								Let's get started!
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Md5Hash;
