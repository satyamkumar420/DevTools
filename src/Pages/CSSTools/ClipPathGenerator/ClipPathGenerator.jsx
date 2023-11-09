import React, { useState } from 'react';

const ShapeGenerator = () => {
	const [selectedShape, setSelectedShape] = useState('triangle');
	const [customShape, setCustomShape] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleShapeChange = (shape) => {
		setSelectedShape(shape);
	};

	const handleCustomShapeChange = (event) => {
		setCustomShape(event.target.value);
	};

	const handleImageUrlChange = (event) => {
		setImageUrl(event.target.value);
	};

	const generateCssCode = () => {
		let cssCode = '';

		if (selectedShape === 'custom' && customShape) {
			cssCode = `clip-path: ${customShape};`;
		} else if (selectedShape !== 'custom') {
			cssCode = `clip-path: ${selectedShape};`;
		}

		return cssCode;
	};

	return (
		<div>
			<h1>Shape Generator</h1>

			<div>
				<h2>Select a shape:</h2>
				<button
					className={`shape-button ${
						selectedShape === 'triangle' ? 'selected' : ''
					}`}
					onClick={() => handleShapeChange('triangle')}>
					Triangle
				</button>
				<button
					className={`shape-button ${
						selectedShape === 'heptagon' ? 'selected' : ''
					}`}
					onClick={() => handleShapeChange('heptagon')}>
					Heptagon
				</button>
				{/* Add more shape buttons here */}
				<button
					className={`shape-button ${
						selectedShape === 'custom' ? 'selected' : ''
					}`}
					onClick={() => handleShapeChange('custom')}>
					Custom
				</button>
			</div>

			{selectedShape === 'custom' && (
				<div>
					<h2>Custom Shape:</h2>
					<input
						type="text"
						value={customShape}
						onChange={handleCustomShapeChange}
					/>
				</div>
			)}

			<div>
				<h2>Image URL:</h2>
				<input type="text" value={imageUrl} onChange={handleImageUrlChange} />
			</div>

			<div>
				<h2>Preview:</h2>
				<div className="image-container">
					<img
						src={imageUrl}
						alt="Preview"
						style={{ clipPath: generateCssCode() }}
					/>
				</div>
			</div>

			<div>
				<h2>CSS Code:</h2>
				<code>{generateCssCode()}</code>
			</div>
		</div>
	);
};

export default ShapeGenerator;
