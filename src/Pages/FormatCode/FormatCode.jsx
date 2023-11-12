import {
	IconFileJson,
	IconBxsFileHtml,
	IconBxlCss3,
} from '../../Components/Icons/Icons';
import SEO from '../../Components/MetaTags/SEO';
import Button from '../../Components/utils/Button/Button';
import { NavLink } from 'react-router-dom';

const FormatCode = () => {
	const buttons = [
		{
			to: '/format-code/json-format',
			text: 'JSON Format',
			icon: <IconFileJson className="text-yellow-500 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/format-code/html-format',
			text: 'HTML Format',
			icon: <IconBxsFileHtml className="text-orange-800 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/format-code/css-format',
			text: 'CSS Format',
			icon: <IconBxlCss3 className="text-blue-600 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/format-code/js-format',
			text: 'JS Format',
			icon: <IconBxlCss3 className="text-yellow-600 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center',
		},
	];
	return (
		<>
			<SEO
				title={'🧑‍💻 Online Code Formatter Tools'}
				description={`Formatter tools are software applications that help you format and organize your code. These tools can be used with different programming languages such as HTML, CSS, JavaScript, JSON, and others. They help you ensure that your code is well-organized, readable and conforms to coding standards. Formatter tools can automatically indent code, remove unnecessary white spaces, and group related code statements together. This makes it easier to understand and maintain your code, especially when working on large projects. Formatter tools are essential for web developers and programmers who want to improve their coding efficiency and accuracy.`}
				keywords={'format,json,html,css,js,javascript,code format, formatter'}
				url={'https://devtoo1s.dev/format-code'}
			/>

			<div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
				<div className="my-20">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Format Code
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
								Use these tools to format your code in a structured and
								organized way, improving readability and making maintenance
								easier.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormatCode;
