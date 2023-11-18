import React, { useState } from 'react';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { IconBxTransfer } from '../../../Components/Icons/Icons';
import { toast } from 'react-toastify';
import { toastStyleError } from '../../../Components/utils/Toastify/toastStyle';
import SEO from '../../../Components/MetaTags/SEO';

const TimeConverter = () => {
	const [inputValue, setInputValue] = useState('');
	const [fromUnit, setFromUnit] = useState('seconds');
	const [toUnit, setToUnit] = useState('minutes');
	const [result, setResult] = useState('');

	// Mapping of time units to seconds
	const timeUnitToSeconds = {
		seconds: 1,
		minutes: 60,
		hours: 3600,
		days: 86400,
		weeks: 604800,
		months: 2628000,
		years: 31536000,
	};

	const convertTime = () => {
		if (!inputValue) {
			toast('Invalid input!', { style: toastStyleError });
			return;
		}
		const inputValueInSeconds =
			parseFloat(inputValue) * timeUnitToSeconds[fromUnit];
		const resultInSeconds = inputValueInSeconds / timeUnitToSeconds[toUnit];
		setResult(resultInSeconds.toFixed(2));
	};

	return (
		<>
			<SEO
				title={'Time Unit Converter'}
				description={`   The Time Unit Converter supports a variety of time measurement
          units, including Seconds, Milliseconds, Microseconds,
          Nanoseconds, Minutes, Hours, Days, Weeks, Months, Years,
          Decades, Centuries, and Millenniums, making it a comprehensive
          and versatile tool for anyone who needs to work with time
          measurements.`}
				keywords={
					'time unit converter, time unit converter, time unit converter, time unit converter, time unit converter'
				}
				url={'https://www.devtoo1s.dev/converters/time-converter'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Time Unit Converter
					</h3>
					<div className="bg-[#1a1c2e] max-w-xl rounded-md shadow-md">
						<div className="my-5 p-3 sm:p-5 ">
							<div className="flex gap-3 items-center  lg:flex-wrap">
								<select
									className="bg-[#202336] w-full sm:w-60 text-white px-3 py-2 rounded-md  outline-none cursor-pointer"
									value={fromUnit}
									onChange={(e) => setFromUnit(e.target.value)}>
									{Object.keys(timeUnitToSeconds).map((unit) => (
										<option key={unit} value={unit}>
											{unit}
										</option>
									))}
								</select>
								<div className="text-xl">
									<IconBxTransfer className="text-base" />
								</div>
								<select
									className="bg-[#202336] w-full sm:w-60 text-white px-3 py-2 rounded-md outline-none cursor-pointer"
									value={toUnit}
									onChange={(e) => setToUnit(e.target.value)}>
									{Object.keys(timeUnitToSeconds).map((unit) => (
										<option key={unit} value={unit}>
											{unit}
										</option>
									))}
								</select>
							</div>
							<div className="my-4 flex flex-col justify-center sm:justify-start">
								<input
									type="number"
									className="px-3 py-2 w-full sm:w-60 rounded-md outline-none border-2 border-gray-600 focus:border-blue-600  bg-[#141522] text-white"
									placeholder="Enter value"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									autoComplete="off"
									min={0}
									step={1}
								/>

								<PrimaryButton
									onClick={convertTime}
									text={'Convert'}
									className={
										' text-white px-4 py-2 rounded-md w-full sm:w-60 mt-4'
									}
								/>
							</div>
							<div className="mt-4">
								{result && (
									<div className="w-full bg-[#202336] text-orange-500 px-4 py-2 rounded-md flex ">
										<div className="text-lg font-light">
											<p className="text-left text-blue-100 font-medium my-2">
												<strong className="text-green-500">
													{inputValue}{' '}
												</strong>
												{fromUnit} is approximately{' '}
												<strong className="text-green-500">{result} </strong>{' '}
												{toUnit}.
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300 mb-1">
								The Time Unit Converter is an invaluable tool for those looking
								to easily convert between a wide range of time measurement
								units, including seconds, minutes, hours, days, and more. This
								versatile tool allows you to convert values with ease, making it
								the perfect choice for students, professionals, and anyone who
								needs to work with different units of time.
							</p>
							<p className="text-blue-300 mb-1">
								To use the converter, simply enter the value you wish to
								convert, select the current measurement unit, and then choose
								the unit you want to convert the value to. The tool will
								instantly display the converted result in the chosen destination
								measurement unit, making it an efficient and effective way to
								work with time measurements.
							</p>
							<p className="text-blue-300 mb-1">
								The Time Unit Converter supports a variety of time measurement
								units, including Seconds, Milliseconds, Microseconds,
								Nanoseconds, Minutes, Hours, Days, Weeks, Months, Years,
								Decades, Centuries, and Millenniums, making it a comprehensive
								and versatile tool for anyone who needs to work with time
								measurements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeConverter;
