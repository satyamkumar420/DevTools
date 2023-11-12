import CodeEditor from '../../../Components/CodeEditor/CodeEditor';
import { useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { toast } from 'react-toastify';
import {
	toastStyleError,
	toastStyleSuccess,
} from '../../../Components/utils/Toastify/toastStyle';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import prettier from 'prettier/standalone';
import parserJs from 'prettier/plugins/babel';
import parserEsTree from 'prettier/plugins/estree';
import SEO from '../../../Components/MetaTags/SEO';

const JsFormat = () => {
	const [jsText, setJsText] = useState('');
	const [formattedJs, setFormattedJs] = useState('');
	const [showJsEditor, setShowJsEditor] = useState(false);
	const [required, setRequired] = useState(false);

	// Format the JS code
	const formatJsCode = async () => {
		if (jsText.trim() === '') {
			toast('Invalid JS Code!', { style: toastStyleError });
			return;
		}

		try {
			const formattedCode = await prettier.format(jsText, {
				parser: 'babel',
				plugins: [parserJs, parserEsTree],
			});
			setFormattedJs(formattedCode);
			setShowJsEditor(true);
			setRequired(true);
		} catch (error) {
			toast('Something went wrong!', { style: toastStyleError });
		}
	};

	// handle editor change
	const handleEditorChange = (newValue) => {
		setJsText(newValue);
		setShowJsEditor(false);
		setRequired(false);
	};

	// handle formatted js code copy
	const handleCopyJsCode = () => {
		if (formattedJs) {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(formattedJs);
				toast('JS Code is Copied!', { style: toastStyleSuccess });
			} else {
				const textarea = document.createElement('textarea');
				textarea.value = formattedJs;
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				textarea.remove();
				toast('JS Code is Copied!', { style: toastStyleSuccess });
			}
		}
	};

	// handle reset editor
	const handleResetEditor = () => {
		setJsText('');
		setFormattedJs('');
		setShowJsEditor(false);
		setRequired(false);
	};

	return (
		<>
			<SEO
				title={'JavaScript Code Formatter'}
				description={`An online JavaScript formatter tool is an online tool that helps you format and organize your JavaScript code. With this tool, you can easily convert your JavaScript code into a readable and well-organized format. The tool can remove unnecessary white spaces, add indentation, and group related JavaScript statements together. This makes it easier to understand and maintain your JavaScript code, especially if you are working on a large project. The tool can also help you catch syntax errors and improve the performance of your website. This is particularly useful for web developers who want to ensure that their code is optimized and easy to work with.`}
				keywords={
					'JavaScript Code Formatter, javascript, code formatter, code, format'
				}
				url={'https://www.devtoo1s.dev/format-code/js-format'}
			/>
			<div className="p-4 sm:ml-52   max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 mb-4 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						JavaScript Code Formatter
					</h3>
					<div>
						<CodeEditor
							languages={[javascript()]}
							value={showJsEditor ? formattedJs : jsText}
							onChange={handleEditorChange}
							required={required}
							displayName={'JavaScript'}
						/>
						{jsText && (
							<div className="flex flex-wrap gap-3 justify-center sm:justify-start">
								<div className="my-2">
									<PrimaryButton
										onClick={formatJsCode}
										text="Format"
										className={'bg-green-600 hover:bg-green-700 w-32'}
									/>
								</div>
								{formattedJs && (
									<div className="my-2">
										<PrimaryButton
											onClick={handleCopyJsCode}
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
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								An online JavaScript formatter tool is an online tool that helps
								you format and organize your JavaScript code. With this tool,
								you can easily convert your JavaScript code into a readable and
								well-organized format. The tool can remove unnecessary white
								spaces, add indentation, and group related JavaScript statements
								together. This makes it easier to understand and maintain your
								JavaScript code, especially if you are working on a large
								project. The tool can also help you catch syntax errors and
								improve the performance of your website. This is particularly
								useful for web developers who want to ensure that their code is
								optimized and easy to work with.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JsFormat;
