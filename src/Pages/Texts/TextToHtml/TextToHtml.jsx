import React, { useState } from 'react';
import { marked } from 'marked';
import CodeEditor from '../../../Components/CodeEditor/CodeEditor';
import { html } from '@codemirror/lang-html';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import {
	IconLink2,
	IconItalic,
	IconBold2,
	IconFormatHeader1,
	IconFormatHeader2,
	IconUnderline,
	IconListUl,
	IconListOl,
	IconStrikethrough,
} from '../../../Components/Icons/Icons';
import { toastStyleSuccess } from '../../../Components/utils/Toastify/toastStyle';
import { toast } from 'react-toastify';
import SEO from '../../../Components/MetaTags/SEO';

const TextToHtml = () => {
	const [inputText, setInputText] = useState('');
	const [showEditor, setShowEditor] = useState(true);

	const applyFormatting = (tag) => {
		const selectedText = window.getSelection().toString();

		let formattedText;
		if (tag === 'ol') {
			// Handle numbered list separately
			const lines = selectedText.split('\n');
			const numberedLines = lines.map((line) => `<li>${line}</li>`).join('');
			formattedText = `<${tag}>${numberedLines}</${tag}>`;
		} else if (tag === 'a') {
			// Handle a tag link

			formattedText = `<${tag} href="">${selectedText}</${tag}>`;
		} else {
			formattedText = `<${tag}>${selectedText}</${tag}>`;
		}

		const newText = inputText.replace(selectedText, `${formattedText}`);
		setInputText(newText);
	};

	const toggleView = () => {
		setShowEditor(!showEditor);
	};

	// write a function to copy html text
	const copyHtmlText = () => {
		const htmlElement = document.createElement('textarea');
		htmlElement.value = inputText;
		document.body.appendChild(htmlElement);
		htmlElement.select();
		document.execCommand('copy');
		document.body.removeChild(htmlElement);
		toast('HTML Copied!', { style: toastStyleSuccess });
	};

	const formattingButtons = [
		{ label: <IconBold2 />, tag: 'strong' },
		{ label: <IconFormatHeader1 />, tag: 'h1' },
		{ label: <IconFormatHeader2 />, tag: 'h2' },
		{ label: <IconLink2 />, tag: 'a' },
		{ label: <IconItalic />, tag: 'em' },
		{ label: <IconUnderline />, tag: 'u' },
		{ label: <IconListUl />, tag: 'li' },
		{ label: <IconListOl />, tag: 'ol' },
		{ label: <IconStrikethrough />, tag: 's' },
	];

	const metaDescription =
		'Free online tool for converting plain text to HTML. Format your text with ease! Convert text to HTML with our easy-to-use online tool.';
	const metaKeywords =
		'text to HTML, online converter, formatting tool, web development, HTML converter, SEO, online tool, coding tool';

	return (
		<>
			<SEO
				title={'Online Free Text To HTML Converter Tools'}
				description={
					'Online free Text to HTML converter tools transform plain text into HTML code, automating the process of converting simple text content into web-friendly HTML markup. These tools are convenient for users who may not be familiar with HTML coding, providing an easy way to generate the necessary HTML tags for formatting text on websites or web pages.'
				}
				keywords={
					'text to HTML, online converter, tools, web development, HTML converter, SEO, online tool, coding tool'
				}
				url={'https://www.devtoo1s.dev/texts/text-to-html'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Text to HTML Converter
					</h3>
					<div className="container mx-auto p-4">
						<div className="flex gap-2 mb-2 flex-wrap items-center">
							{formattingButtons.map((button) => (
								<div key={button.tag}>
									<PrimaryButton
										text={button.label}
										disabled={!showEditor}
										onClick={() =>
											showEditor ? applyFormatting(button.tag) : null
										}
										className={`${
											showEditor
												? 'bg-blue-600 hover:bg-blue-800'
												: 'bg-gray-500 hover:bg-gray-500'
										} text-white px-4 py-2 rounded-md`}
									/>
								</div>
							))}
							<PrimaryButton
								onClick={toggleView}
								text={showEditor ? 'Preview' : 'Code Editor'}
								className="bg-green-600  hover:bg-green-700 text-white px-4 py-2 rounded"
							/>
							{inputText && (
								<PrimaryButton
									onClick={copyHtmlText}
									disabled={!showEditor}
									text="Copy HTML"
									className={`${
										showEditor
											? 'bg-blue-600 hover:bg-blue-800'
											: 'bg-gray-500 hover:bg-gray-500'
									} text-white px-4 py-2 rounded-md `}
								/>
							)}
						</div>
						{showEditor ? (
							<CodeEditor
								placeholder={'Enter your text here...'}
								onChange={(e) => setInputText(e)}
								value={inputText}
								Height={'50vh'}
								languages={[html()]}
								displayName={'Text to HTML'}
							/>
						) : (
							<div className="mt-4 bg-[#1a1c2e] rounded-md">
								<h2 className="text-lg font-semibold mb-2 text-center">
									{' '}
									HTML Preview
								</h2>
								<iframe
									title="HTML Preview"
									className="w-full h-80 rounded-md"
									srcDoc={marked(inputText)}></iframe>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								We understand that converting plain text to HTML can be a
								daunting task, but we're here to help make it easier for you.
								Our free online tool is designed to simplify text formatting, so
								you can focus on what's important. We would be delighted to
								assist you in converting your text to HTML effortlessly.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TextToHtml;
