import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CodeEditor from '../../../Components/CodeEditor/CodeEditor';
import { html } from '@codemirror/lang-html';
import { toast } from 'react-toastify';
import { toastStyleSuccess } from '../../../Components/utils/Toastify/toastStyle';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';

const MetaTagsGenerator = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [keywords, setKeywords] = useState('');
	const [url, setUrl] = useState('');
	const [image, setImage] = useState('');
	const [type, setType] = useState('website');
	const [metaTagString, setMetaTagString] = useState('');

	const generateMetaTags = () => {
		// Build the meta tags based on the input data
		const metaTags = [
			`<meta property="og:title" content="${title}" />`,
			`<meta property="description" content="${description}" />`,
			`<meta property="keywords" content="${keywords}" />`,
			`<meta property="og:url" content="${url}" />`,
			`<meta property="og:image" content="${image}" />`,
			`<meta property="og:type" content="${type}" />`,

			``,
			`<!-- To add meta tags, paste them within the head section of your HTML file. This step is critical to ensure optimal search engine visibility. -->`,
		];
		// Join the meta tags into a single string
		const generatedMetaTagString = metaTags.join('\n');
		setMetaTagString(generatedMetaTagString);
	};

	// function to copy the generated meta tags
	const handleCopy = () => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(metaTagString);
			toast('Meta Tags Copied!', { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = metaTagString;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast('Meta Tags Copied!', { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<Helmet>
				<title>Meta Tag Generator</title>
			</Helmet>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Meta Tag Generator
					</h3>
					<div className="container mx-auto p-4">
						{/* <h1 className="text-2xl font-semibold mb-4">Meta Tag Generator</h1> */}
						<div className=" flex flex-wrap gap-2">
							<div>
								<label>Title</label>
								<input
									type="text"
									placeholder="Enter title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className="w-full p-2 bg-[#1a1c2e] outline-none rounded-md focus:border-blue-500 border-2 border-gray-400"
								/>
							</div>
							<div>
								<label>Description</label>
								<input
									type="text"
									placeholder="Enter description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className="w-full p-2 bg-[#1a1c2e] outline-none rounded-md focus:border-blue-500 border-2 border-gray-400"
								/>
							</div>
							<div>
								<label>Keywords</label>
								<input
									type="text"
									placeholder="Enter keywords"
									value={keywords}
									onChange={(e) => setKeywords(e.target.value)}
									className="w-full p-2 bg-[#1a1c2e] outline-none rounded-md focus:border-blue-500 border-2 border-gray-400"
								/>
							</div>
							<div>
								<label>URL</label>
								<input
									type="text"
									placeholder="Enter URL"
									value={url}
									onChange={(e) => setUrl(e.target.value)}
									className="w-full p-2 bg-[#1a1c2e] outline-none rounded-md focus:border-blue-500 border-2 border-gray-400"
								/>
							</div>
							<div>
								<label>Image</label>
								<input
									type="text"
									placeholder="Image URL"
									value={image}
									onChange={(e) => setImage(e.target.value)}
									className="w-full p-2 bg-[#1a1c2e] outline-none rounded-md focus:border-blue-500 border-2 border-gray-400"
								/>
							</div>
							<div>
								<label>Type</label>

								<select
									value={type}
									onChange={(e) => setType(e.target.value)}
									className="w-full p-2 rounded-md border-2 border-gray-400 bg-[#1a1c2e] cursor-pointer">
									<option value="website">Website</option>
									<option value="article">Article</option>
									<option value="book">Book</option>
									<option value="profile">Profile</option>
									<option value="music.song">Music Song</option>
									<option value="music.album">Music Album</option>
									<option value="music.playlist">Music Playlist</option>
									<option value="video.movie">Video Movie</option>
									<option value="movie.episode">Movie Episode</option>
									<option value="movie.other">Movie Other</option>
								</select>
							</div>
						</div>

						<div className="mt-2">
							<PrimaryButton
								onClick={generateMetaTags}
								text={'Generate Meta Tags'}
								className={'py-2'}
							/>
						</div>
						{metaTagString && (
							<div className="mt-4">
								<h2 className="text-lg text-gray-300 mb-1">
									Generated Meta Tags:
								</h2>

								<CodeEditor
									value={metaTagString}
									languages={[html()]}
									Height={'35vh'}
								/>
								<div className="mt-2">
									<PrimaryButton
										onClick={handleCopy}
										text={'Copy Meta Tags'}
										className={'py-2'}
									/>
								</div>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								Meta tags generator tool is a tool that helps website owners to
								create meta tags for their website pages. Meta tags are HTML
								elements that provide information about a webpage, such as its
								title, description, and keywords. These tags are used by search
								engines to understand the content of a webpage and to display
								relevant results to users. The meta tags generator tool allows
								website owners to customize their meta tags to improve their
								website's visibility and ranking in search engine results pages.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MetaTagsGenerator;
