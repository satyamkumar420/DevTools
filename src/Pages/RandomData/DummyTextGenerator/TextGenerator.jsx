import { useState, useEffect } from 'react';
import Options from './Options';
import OutputText from './OutputText';
import { toast } from 'react-toastify';
import { toastStyleError } from '../../../Components/utils/Toastify/toastStyle';
import lodash from 'lodash';
import { faker } from '@faker-js/faker';
import { Helmet } from 'react-helmet-async';

const TextGenerator = () => {
	// Dummy Text
	const defaultText =
		'Bacon ipsum dolor amet cow spare ribs pig tail pork chop leberkas ball tip filet mignon, shank pork tri-tip corned beef pastrami beef. Pork loin chuck t-bone, burgdoggen strip steak shank meatball shoulder chislic pig rump spare ribs bacon ground round salami. Capicola rump ground round shank drumstick, picanha cow prosciutto kielbasa ham hock pork loin chislic. Salami chuck drumstick strip steak.';

	const [paragraphs, setParagraphs] = useState([]);
	const [tag, setTag] = useState('p');
	const [inputValue, setInputValue] = useState(0);
	const [includeHtml, setIncludeHtml] = useState(false);

	useEffect(() => {
		const generateRandomText = () => {
			try {
				// Generate random text using faker
				const randomText = Array.from({ length: inputValue }, () =>
					faker.lorem.paragraph()
				);

				// Use Lodash to manipulate the data
				const modifiedData = lodash.map(randomText, (item) => {
					return lodash.capitalize(item);
				});

				setParagraphs(modifiedData);
			} catch (error) {
				toast('Something went wrong!', { style: toastStyleError });
			}
		};

		generateRandomText();
	}, [inputValue]);

	return (
		<>
			<Helmet>
				<title>Random Text Generator</title>
			</Helmet>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded-md max-w-screen-lg text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Random Text Generator
					</h3>
					<div>
						<Options
							paragraphs={paragraphs}
							tag={tag}
							setTag={setTag}
							inputValue={inputValue}
							setInputValue={setInputValue}
							includeHtml={includeHtml}
							setIncludeHtml={setIncludeHtml}
							defaultText={defaultText}
						/>
					</div>
					<div className="my-4">
						<OutputText
							paragraphs={paragraphs}
							tag={tag}
							includeHtml={includeHtml}
							defaultText={defaultText}
						/>
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p>Unlock Your Creativity with the Random Text Generator</p>
							<p className="text-gray-300">
								The Random Text Generator is an invaluable tool that empowers
								creators to breathe life into their imagination. Whether you're
								designing a website, crafting a brochure, curating a magazine,
								or preparing a presentation, this versatile tool allows you to
								effortlessly generate words, phrases, lists, and paragraphs. By
								crafting placeholder content, you gain the ability to visualize
								and plan your layout and design meticulously before integrating
								actual content. This ensures that your project aligns precisely
								with your vision. With just a few clicks, you can tap into your
								creative potential and bring your ideas to fruition. So, go
								ahead, explore the endless possibilities, and let the Random
								Text Generator illuminate your path on your creative journey.
							</p>
							<p className="text-blue-300">
								<strong>Note: </strong>
								<em>
									We have expanded the maximum number of paragraphs to 1000 for
									your convenience.
								</em>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TextGenerator;
