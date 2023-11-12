import {
	IconPassword,
	IconTextSlash,
	IconProfile,
	IconCreditCard,
	IconTokens,
} from '../../Components/Icons/Icons';
import Button from '../../Components/utils/Button/Button';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../../Components/MetaTags/SEO';

const RandomData = () => {
	const buttons = [
		{
			to: '/random-data/password-generator',
			text: 'Password Generator',
			icon: <IconPassword className="text-green-500" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/random-data/text-generator',
			text: 'Text Generator',
			icon: <IconTextSlash className="text-pink-500" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/random-data/token-generator',
			text: 'Token Generator',
			icon: <IconTokens className="text-violet-800" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/random-data/fake-details',
			text: 'Fake Details',
			icon: <IconProfile className="text-yellow-500" />,
			className: 'p-2 grid place-items-center',
		},
		{
			to: '/random-data/credit-card',
			text: 'Credit Card',
			icon: <IconCreditCard className="text-purple-500" />,
			className: 'p-2 grid place-items-center',
		},
	];

	return (
		<>
			<SEO
				title={'Online Free Random Data Generator Tools'}
				description={
					'Online random data generator tools create fictional or randomly generated data for testing, development, or privacy protection. These tools produce data sets, including names, addresses, passwords, and other details, mimicking real-world scenarios without using actual sensitive information. They are commonly used in design, development, and testing to simulate various scenarios without compromising privacy or security.'
				}
				keywords={
					'random data generator, free random data generator, online free random data generator tools, password, credit, dummy text, fake details, text generator, token generator, random data, credit card, data generator'
				}
				url={'https://devtoo1s.dev/random-data'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Random Data
					</h3>
					<div className="mt-5 sm:flex sm:flex-wrap sm:gap-6 ">
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
							<span className="text-blue-300">
								Improve your work productivity by utilizing our collection of
								online tools.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RandomData;
