import { NavLink } from 'react-router-dom';
import Button from '../../Components/utils/Button/Button';
import {
	IconBxsFileHtml,
	IconBxlCss3,
	IconBrandJavascript,
} from '../../Components/Icons/Icons';
import SEO from '../../Components/MetaTags/SEO';

const MinifyCode = () => {
	const buttons = [
		{
			to: '/minify-code/html-minify',
			text: 'HTML',
			icon: <IconBxsFileHtml className="text-red-600 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center sm:w-32',
		},
		{
			to: '/minify-code/css-minify',
			text: 'CSS',
			icon: <IconBxlCss3 className="text-blue-600 text-lg md:text-3xl" />,
			className: 'p-2 grid place-items-center sm:w-32',
		},
		{
			to: '/minify-code/js-minify',
			text: 'JavaScript',
			icon: (
				<IconBrandJavascript className="text-yellow-600 text-lg md:text-3xl" />
			),
			className: 'p-2 grid place-items-center sm:w-32',
		},
	];
	return (
		<>
			<SEO
				title={'Online Free Minifier Tools'}
				description={
					'Devtoo1s.dev is a website that offers a wide range of free online tools for developers. Among these tools are online free minifier tools that help developers reduce the size of their code to improve website performance. These minifier tools support various programming languages such as JavaScript, CSS, and HTML. They work by analyzing the code and removing unnecessary characters such as white spaces, line breaks, and comments. The result is a compressed version of the code that is much smaller in size, making it faster to load and execute on websites. Devtools.dev is a great resource for developers who want to optimize the performance of their websites and improve the user experience.'
				}
				keywords={
					'minify code, minify js code, minify html code, minify css code,html,css,javascript,js, minifier, minifier tools, minify'
				}
				url={'https://www.devtoo1s.dev/minify-code'}
			/>
			<div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
				<div className="my-20">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Minifier Tools
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
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								Devtoo1s.dev is a website that offers a wide range of free
								online tools for developers. Among these tools are online free
								minifier tools that help developers reduce the size of their
								code to improve website performance. These minifier tools
								support various programming languages such as JavaScript, CSS,
								and HTML. They work by analyzing the code and removing
								unnecessary characters such as white spaces, line breaks, and
								comments. The result is a compressed version of the code that is
								much smaller in size, making it faster to load and execute on
								websites. Devtools.dev is a great resource for developers who
								want to optimize the performance of their websites and improve
								the user experience.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MinifyCode;
