import Logo from '../../assets/favicon.png';
import lazyLoad from '../../utils/lazyLoad/lazyLoad';
const SEO = lazyLoad('../../Components/MetaTags/SEO');

const About = () => {
	return (
		<>
			<SEO
				title="About | DevToo1s.dev"
				description={`Our online tools cover a wide
							range of topics, such as generating fictitious data for testing,
							code formatting and minification, and data conversion, as well as
							utilities for working with dates, colors, texts, images, and even
							PDFs. Our platform also benefits students, designers, and content
							creators. We are continuously expanding our collection of tools to
							add value to developers and the technology community.`}
				keywords={'About - online free devtoo1s.dev, devtoo1s, devtools, about'}
				url={'https://www.devtoo1s.dev/about'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
				<div className="my-20">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						About
					</h3>
					<div className="text-left mt-5 bg-[#1a1c2e] p-4 shadow-md rounded text-sm sm:text-lg ">
						<img
							src={Logo}
							alt="logo"
							className="rounded w-20 float-left align-middle mr-4"
						/>
						<p className="text-gray-400">
							At DevTools, we provide a website with various free tools designed
							for developers, software testers, and other tech professionals.
							Our goal is to assist with your tasks throughout the different
							stages of software development. Our online tools cover a wide
							range of topics, such as generating fictitious data for testing,
							code formatting and minification, and data conversion, as well as
							utilities for working with dates, colors, texts, images, and even
							PDFs. Our platform also benefits students, designers, and content
							creators. We are continuously expanding our collection of tools to
							add value to developers and the technology community.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
