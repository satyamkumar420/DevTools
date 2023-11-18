import CodeEditor from '../../../Components/CodeEditor/CodeEditor';
import { useState } from 'react';
import { html } from '@codemirror/lang-html';
import { toast } from 'react-toastify';
import {
	toastStyleError,
	toastStyleSuccess,
} from '../../../Components/utils/Toastify/toastStyle';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import * as prettier from 'prettier/standalone';
import prettierPluginHtml from 'prettier/plugins/html';
import SEO from '../../../Components/MetaTags/SEO';

const HTMLFormat = () => {
	const [htmlText, setHtmlText] = useState('');
	const [formattedHtml, setFormattedHtml] = useState('');
	const [showHtmlEditor, setShowHtmlEditor] = useState(false);
	const [required, setRequired] = useState(false);

	// Format the HTML code
	const handleFormatHtml = async () => {
		if (htmlText.trim() === '') {
			toast('Invalid HTML Code!', { style: toastStyleError });
			return;
		}
		const htmlRegex = `<([a-z]+)(?![^>]*\/>)[^>]*>`;
		const ValidHtml = htmlText.match(htmlRegex);
		if (!ValidHtml) {
			toast('Invalid HTML Code!', { style: toastStyleError });
			return;
		}
		try {
			const formatted = await prettier.format(htmlText, {
				parser: 'html',
				plugins: [prettierPluginHtml],
			});
			setFormattedHtml(formatted);
			setRequired(true);
		} catch (error) {
			toast('Something went wrong!', { style: toastStyleError });
		}
	};

	// handle editor change
	const handleEditorChange = (newValue) => {
		setHtmlText(newValue);
		// setFormattedHtml("");
		setShowHtmlEditor(false);
		setRequired(false);
	};

	// handle copy html
	const handleCopyHtml = () => {
		if (formattedHtml) {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(formattedHtml);
				toast(`HTML Code is Copied!`, { style: toastStyleSuccess });
			} else {
				const textarea = document.createElement('textarea');
				textarea.value = formattedHtml;
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				textarea.remove();
				toast(`HTML Code is Copied!`, { style: toastStyleSuccess });
			}
		}
	};

	// handle reset editor
	const handleResetEditor = () => {
		setHtmlText('');
		setFormattedHtml('');
		setShowHtmlEditor(false);
		setRequired(false);
	};

	return (
		<>
			<SEO
				title={'HTML Code Formatter'}
				description={`An online HTML formatter tool is an online tool that helps you format and organize your HTML code. With this tool, you can easily convert your HTML code into a readable and well-organized format. The tool can remove unnecessary white spaces, add indentation, and group related HTML tags together. This makes it easier to understand and maintain your HTML code, especially if you are working on a large project. The tool can also help you catch syntax errors and improve the performance of your website. This is particularly useful for web developers who want to ensure that their code is optimized and easy to work with.`}
				keywords={
					'HTML Code Formatter, Code Formatter, format, code, formatter'
				}
				url={'https://www.devtoo1s.dev/format-code/html-format'}
			/>
			<div className="p-4 sm:ml-52   max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 mb-4 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						HTML Code Formatter
					</h3>
					<div>
						<CodeEditor
							languages={[html()]}
							value={showHtmlEditor ? htmlText : formattedHtml}
							onChange={handleEditorChange}
							required={required}
							placeholder={'Enter HTML code here'}
							displayName={'HTML'}
						/>
					</div>
					{htmlText && (
						<div className="flex flex-wrap gap-3 justify-center sm:justify-start">
							<div className="my-2">
								<PrimaryButton
									onClick={handleFormatHtml}
									text="Format"
									className={'bg-green-600 hover:bg-green-700 w-32'}
								/>
							</div>
							{formattedHtml && (
								<div className="my-2">
									<PrimaryButton
										onClick={handleCopyHtml}
										text="Copy"
										className={'w-32'}
									/>
								</div>
							)}
							<div className="my-2">
								<PrimaryButton
									onClick={handleResetEditor}
									text="Reset"
									className={'bg-orange-600 hover:bg-orange-800 w-32'}
								/>
							</div>
						</div>
					)}
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								An online HTML formatter tool is an online tool that helps you
								format and organize your HTML code. With this tool, you can
								easily convert your HTML code into a readable and well-organized
								format. The tool can remove unnecessary white spaces, add
								indentation, and group related HTML tags together. This makes it
								easier to understand and maintain your HTML code, especially if
								you are working on a large project. The tool can also help you
								catch syntax errors and improve the performance of your website.
								This is particularly useful for web developers who want to
								ensure that their code is optimized and easy to work with.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HTMLFormat;
