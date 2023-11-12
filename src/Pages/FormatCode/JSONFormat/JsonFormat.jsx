import CodeEditor from '../../../Components/CodeEditor/CodeEditor';
import { useState } from 'react';
import { json } from '@codemirror/lang-json';
import { toast } from 'react-toastify';
import {
	toastStyleError,
	toastStyleSuccess,
} from '../../../Components/utils/Toastify/toastStyle';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import SEO from '../../../Components/MetaTags/SEO';

const JsonFormat = () => {
	const [jsonText, setJsonText] = useState('');
	const [formattedJson, setFormattedJson] = useState('');
	const [showJsonEditor, setShowJsonEditor] = useState(false);
	const languages = [json()];
	const [required, setRequired] = useState(false);

	const handleFormatClick = () => {
		if (!jsonText) {
			toast('Please enter JSON code!', { style: toastStyleError });
			return;
		}
		try {
			const parsedJson = JSON.parse(jsonText);
			const formatted = JSON.stringify(parsedJson, null, 4);
			setFormattedJson(formatted);
			setShowJsonEditor(true);
			setRequired(true);
		} catch (error) {
			toast('Please enter valid json!', { style: toastStyleError });
		}
	};

	const handleEditorChange = (newValue) => {
		setJsonText(newValue);
		setShowJsonEditor(false);
		setFormattedJson('');
	};

	// handle copy json
	const handleCopyClick = () => {
		if (formattedJson) {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(formattedJson);
				toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
			} else {
				const textarea = document.createElement('textarea');
				textarea.value = formattedJson;
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				textarea.remove();
				toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
			}
		}
	};

	// handle reset editor
	const handleResetEditor = () => {
		setShowJsonEditor(false);
		setFormattedJson('');
		setJsonText('');
		setRequired(false);
	};

	return (
		<>
			<SEO
				title={'JSON Code Formatter'}
				description={
					'JSON Code Formatter - An online JSON formatter tool is an online tool that helps you format and organize your JSON code. With this tool, you can easily convert your JSON code into a readable and well-organized format. The tool can remove unnecessary white spaces, add indentation, and group related JSON objects together. This makes it easier to understand and maintain your JSON code, especially if you are working with large and complex JSON data. The tool can also help you catch syntax errors and improve the performance of your website or application. This is particularly useful for web developers and data analysts who work with JSON data.'
				}
				keywords={
					'json code formatter, json code formatter tool, format, json, tools, code formatter'
				}
				url={'https://www.devtoo1s.dev/format-code/json-format'}
			/>
			<div className="p-4 sm:ml-52   max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 mb-4 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						JSON Code Format
					</h3>
					<CodeEditor
						value={showJsonEditor ? formattedJson : jsonText}
						onChange={handleEditorChange}
						languages={languages}
						placeholder="Enter JSON here"
						required={required}
						displayName="JSON"
					/>
					{jsonText && (
						<div className="flex flex-wrap gap-3 justify-center sm:justify-start">
							<div className="my-2">
								<PrimaryButton
									onClick={handleFormatClick}
									text="Format"
									className={'bg-green-600 hover:bg-green-700 w-32'}
								/>
							</div>
							{formattedJson && (
								<div className="my-2">
									<PrimaryButton
										onClick={handleCopyClick}
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
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								An online JSON formatter tool is an online tool that helps you
								format and organize your JSON code. With this tool, you can
								easily convert your JSON code into a readable and well-organized
								format. The tool can remove unnecessary white spaces, add
								indentation, and group related JSON objects together. This makes
								it easier to understand and maintain your JSON code, especially
								if you are working with large and complex JSON data. The tool
								can also help you catch syntax errors and improve the
								performance of your website or application. This is particularly
								useful for web developers and data analysts who work with JSON
								data.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JsonFormat;
