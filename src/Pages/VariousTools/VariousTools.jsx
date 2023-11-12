import { NavLink } from 'react-router-dom';
import Button from '../../Components/utils/Button/Button';
import {
	IconLink,
	IconCalculator,
	IconHash,
	IconBold,
	IconXml,
	IconQrCode,
} from '../../Components/Icons/Icons';
import SEO from '../../Components/MetaTags/SEO';

const VariousTools = () => {
	const buttons = [
		{
			to: '/various-tools/encode-url',
			text: 'URL Encoder',
			icon: <IconLink className="text-yellow-500 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/various-tools/age-calculator',
			text: 'Age Calculator',
			icon: <IconCalculator className="text-blue-100 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/various-tools/md5-hash',
			text: 'MD5 Hash',
			icon: <IconHash className="text-green-500 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/various-tools/base64-encoder',
			text: 'Base64 Encoder',
			icon: <IconBold className="text-red-500 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/various-tools/frontend-code',
			text: 'Code Viewer',
			icon: <IconXml className="text-pink-500 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/various-tools/qr-code-generator',
			text: 'QR Code Generator',
			icon: <IconQrCode className="text-cyan-100 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/various-tools/meta-tags-generator',
			text: 'Meta Tags Generator',
			icon: <IconXml className="text-orange-500 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},

		// Add more buttons here
	];

	return (
		<>
			<SEO
				title={'Online Free Various Tools'}
				description={
					'Online free various tools encompass a Meta Tag Generator for creating SEO-friendly meta tags, a Code Viewer for displaying and rendering frontend code snippets, a URL Encoder for encoding special characters in URLs, a Base64 Encoder for converting binary or text data to Base64 encoding, and an MD5 Hash Encoder for generating MD5 hash values for text or data. Each tool serves a specific purpose, offering users quick and accessible functionalities for tasks like SEO optimization, code viewing, URL encoding, and data hashing.'
				}
				keywords={
					'Various Tools, Various Tools Online, Various Tools Free, meta tags, age calculator, url encoder, qr code generator, base64 encoder, md5 hash, frontend code, url to encode, url to decode, url to encode online, url to decode online, url to encode free, url to decode free'
				}
				url={'https://www.devtoo1s.dev/various-tools'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Various Tools
					</h3>
					<div className="mt-5 sm:flex sm:flex-wrap sm:gap-6">
						{buttons.map((button, index) => (
							<NavLink to={button.to} key={index} className="grid mt-5 sm:mt-0">
								<Button
									text={button.text}
									icon={button.icon}
									className={button.className}
								/>
							</NavLink>
						))}
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								Improve your work productivity by utilizing our collection of
								online tools that include a variety of tools.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VariousTools;
