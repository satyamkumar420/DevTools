import { useState, lazy } from 'react';
import { tags as t } from '@lezer/highlight';
// import Loader from '../utils/Loader/Loader';
import { andromeda, andromedaInit } from '@uiw/codemirror-theme-andromeda';
import './CodeEditor.css';
import CodeMirror from '@uiw/react-codemirror';
import TextArea from '../utils/textArea/TextArea';

const myTheme = {
	settings: {
		background: '#1a1c2e',
		backgroundImage: '',
		foreground: '#c9e0f7e0',
		caret: '#0df0bf',
		selection: '#036dd626',
		selectionMatch: '#036dd626',
		lineHighlight: '#21233a',
		gutterBackground: '#21233a',
		gutterForeground: '#8a919966',
		gutterActiveForeground: '#c9d7e6aa',
	},
	styles: [
		// { tag: t.comment, color: "#3e4474" },
		// { tag: t.variableName, color: "#28c8e8" },
		// { tag: [t.string, t.special(t.brace)], color: "#0db723" },
		// { tag: t.number, color: "#fa3535" },
		{ tag: t.bool, color: '#cd12f2' },
		{ tag: t.null, color: '#f4800c' },
		// { tag: t.keyword, color: "#e152ff" },
		// { tag: t.operator, color: "#c70a3f" },
		// { tag: t.className, color: "#caa812" },
		{ tag: t.typeName, color: '#06ab9d' },
		{ tag: t.angleBracket, color: '#faf3ef' },
		// { tag: t.tagName, color: "#00e394c6" },
		// { tag: t.attributeName, color: "#ffda27" },
		{ tag: t.punctuation, color: '#ffda27' },
		// { tag: t.meta, color: "#ffda27" },
		// { tag: t.regexp, color: "#06b226" },
		// { tag: t.url, color: "#4f55fa" },
		// { tag: t.escape, color: "#07b6b3" },
		// { tag: t.brace, color: "#ffda27" },
		// { tag: t.special(t.brace), color: "#ffda27" },
	],
};

const CodeEditor = ({
	value,
	onChange,
	languages,
	placeholder,
	required,
	displayName,
	Height,
	Width,
	Button,
	Icon,
}) => {
	const [isLoading, setIsLoading] = useState(false);

	const customStyles = {
		fontSize: '18px',
		fontWeight: '400',
		// fontFamily: "Fira Code",
	};

	return (
		<>
			{isLoading ? (
				<div className="text-center px-2">
					<TextArea className="bg-[#2a2b3d]" />
				</div>
			) : (
				<div className="overflow-hidden rounded-md shadow-md py-1 pr-1 bg-[#21233a] ">
					<div className="flex gap-2 p-2 items-center">
						<div className="w-3 h-3 p-1 bg-red-500 rounded-full"></div>
						<div className="w-3 h-3 p-1 bg-yellow-500 rounded-full"></div>
						<div className="w-3 h-3 p-1 bg-green-500 rounded-full"></div>
						<div className="flex justify-center text-center mx-auto">
							<div className=" ">{displayName}</div>
						</div>
						<button className="" onClick={Button}>
							{Icon}
						</button>
					</div>
					<CodeMirror
						value={value}
						height={`${Height || '60vh'}`}
						width={Width || '100%'}
						theme={andromedaInit(myTheme)}
						extensions={languages}
						onChange={onChange}
						style={customStyles}
						placeholder={placeholder}
						security="true"
						onLoad={() => setIsLoading(false)}
						readOnly={required}
					/>
				</div>
			)}
		</>
	);
};

export default CodeEditor;
