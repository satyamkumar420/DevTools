import { useState, lazy } from 'react';
import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';
import { xmlToJson, processJson, isXMLFormat } from './xml_to_json';
import { toast } from 'react-toastify';
import {
	toastStyleError,
	toastStyleSuccess,
} from '../../../Components/utils/Toastify/toastStyle';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import SEO from '../../../Components/MetaTags/SEO';
const CodeEditor = lazy(() =>
	import('../../../Components/CodeEditor/CodeEditor')
);

const XmlToJson = () => {
	const [xmlInput, setXmlInput] = useState(''); // XML input
	const [jsonValue, setJsonValue] = useState('');
	const [showJsonEditor, setShowJsonEditor] = useState(false);
	const [languageMode, setLanguageMode] = useState(xml());
	const [required, setRequired] = useState(false);

	// Event handler to update state when the user types XML input
	const handleXmlInputChange = (newValue) => {
		setXmlInput(newValue);
		setShowJsonEditor(false);
		setLanguageMode(xml());
		setJsonValue('');
	};

	// Event handler for the "Convert" button
	const handleConvertClick = () => {
		setLanguageMode(json());
		// Convert XML to JSON
		try {
			if (!isXMLFormat(xmlInput)) {
				toast('XML is not valid!', {
					style: toastStyleError,
				});
				return;
			}
			const xmlData = xmlToJson(xmlInput);
			const processedJson = processJson(xmlData);
			const jsonData = JSON.stringify(processedJson, null, 4);
			setJsonValue(jsonData);
			setShowJsonEditor(true);
			setRequired(true);
		} catch (error) {
			toast('XML is not valid!', { style: toastStyleError });
		}
	};

	// handle copy
	const handleCopyClick = () => {
		if (jsonValue) {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(jsonValue);
				toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
			} else {
				const textarea = document.createElement('textarea');
				textarea.value = jsonValue;
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				textarea.remove();
				toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
			}
		}
	};

	// handle Reset Editor
	const handleResetEditor = () => {
		setShowJsonEditor(false);
		setJsonValue('');
		setXmlInput('');
		setRequired(false);
	};

	return (
		<>
			<SEO
				title={'XML To JSON Converter'}
				description={`XML to JSON converter is a tool that helps you convert XML data to JSON format. This tool takes the XML data as input and converts it into a JSON string. The JSON string can then be used in various applications, including web services, databases, and other software systems. This conversion is useful when you want to transfer data between different systems that use different formats. It is a simple and effective way to convert XML data to JSON format without requiring any programming knowledge.`}
				keywords={
					'xml to json converter, xml to json converter, xml to json converter, xml to json converter, xml to json converter'
				}
				url={'https://www.devtoo1s.dev/converters/xml-to-json'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20  max-w-screen-lg">
					<h3 className="p-2 mb-4 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						XML To JSON Converter
					</h3>
					<div>
						<CodeEditor
							value={showJsonEditor ? jsonValue : xmlInput}
							onChange={handleXmlInputChange}
							placeholder={'Enter XML code here to convert to JSON'}
							languages={languageMode}
							required={required}
							displayName={'XML To JSON'}
						/>
						{xmlInput && (
							<div className="flex flex-wrap gap-3 justify-center sm:justify-start">
								<div className="my-2">
									<PrimaryButton
										onClick={handleConvertClick}
										text="Convert"
										className="bg-green-600 hover:bg-green-800 w-32"
									/>
								</div>
								{jsonValue && (
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
										className="bg-orange-600 hover:bg-orange-800 w-32"
									/>
								</div>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								👋 Hey there! If you need to convert XML to JSON, we've got you
								covered with our awesome tool! It's super easy to use, and you
								can copy the code with just one click. So go ahead and give it a
								try - we promise it'll be a hassle-free experience!
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default XmlToJson;
