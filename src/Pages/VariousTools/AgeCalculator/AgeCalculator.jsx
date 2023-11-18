import { useState, useEffect } from 'react';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import SEO from '../../../Components/MetaTags/SEO';

const AgeCalculator = () => {
	const [birthdate, setBirthdate] = useState('');
	const [currentDate, setCurrentDate] = useState('');
	const [age, setAge] = useState('');

	useEffect(() => {
		const currentDate = new Date();
		const currentDateStr = currentDate.toISOString().substr(0, 10);
		setCurrentDate(currentDateStr);
	}, []);

	const calculateAge = () => {
		if (birthdate && currentDate) {
			const birthdateObj = new Date(birthdate);
			const currentDateObj = new Date(currentDate);

			const ageInMilliseconds = currentDateObj - birthdateObj;
			const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

			const years = Math.floor(ageInYears);
			const remainingDays = (ageInYears - years) * 365.25;
			const months = Math.floor(remainingDays / 30.44);
			const days = Math.floor(remainingDays % 30.44);

			const ageString = (
				<div className="flex gap-3 flex-wrap">
					<div className="flex gap-1 ">
						<div className="text-green-500 font-bold text-base sm:text-xl">
							{years}
						</div>
						Years
					</div>
					<div className="flex gap-1">
						<div className="text-green-500 font-bold text-base sm:text-xl">
							{months}
						</div>
						Months
					</div>
					<div className="flex gap-1">
						<div className="text-green-500 font-bold text-base sm:text-xl">
							{days}
						</div>{' '}
						Days
					</div>
				</div>
			);
			setAge(ageString);
		}
	};

	return (
		<>
			<SEO
				title={'Online Free Age Calculator Tools'}
				description={`Online free age calculator tools are web-based applications that quickly determine a person's age based on the input of their date of birth and the current date. These tools automate the calculation process, providing an easy way to find an individual's age without manual computation. Users typically input the relevant dates, and the calculator returns the calculated age, which can be useful in various contexts, such as event planning, age verification, or personal information assessment.`}
				keywords={
					'Age Calculator, Age Calculator Online, Age Calculator Online Free, Age Calculator Online Free Tools, Age Calculator Online Free Tools, Age Calculator Online Free Tools, birth date calculator, birth date calculator online, birth date calculator online free, birth date calculator online free tools, birth date calculator online free tools, birth date calculator online free tools'
				}
				url={'https://www.devtoo1s.dev/various-tools/age-calculator'}
			/>
			<div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Age Calculator
					</h3>
					<div className="mt-5 max-w-md bg-[#1a1c2e] p-5 rounded-md shadow-md">
						<div className="mb-4">
							<label>Select Birthdate:</label>
							<input
								type="date"
								id="birthdate"
								value={birthdate}
								onChange={(e) => setBirthdate(e.target.value)}
								className="border-none outline-none border-gray-300 p-2 w-full rounded-md bg-[#2a2d4b]"
							/>
						</div>
						<div className="mb-4">
							<label>Select Current Date:</label>
							<input
								type="date"
								id="currentDate"
								value={currentDate}
								onChange={(e) => setCurrentDate(e.target.value)}
								className="border-gray-300 p-2 w-full bg-[#2a2d4b] rounded-md outline-none border-none"
							/>
						</div>
						<PrimaryButton
							onClick={calculateAge}
							text={'Calculate Age'}
							className={' text-white px-4 py-2 rounded-md w-full sm:w-60 '}
						/>
						<div className="mt-4 overflow-hidden">
							{age && (
								<div className="text-blue-50 flex gap-2 flex-wrap bg-[#171929] p-4 rounded-md shadow-md font-normal sm:text-lg text-base ">
									Your Age <div className="font-bold text-yellow-500">:</div>
									<div className="font-medium">{age}</div>
								</div>
							)}
						</div>
					</div>
					<div className="mt-10">
						<div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<p className="text-blue-300">
								👋 Hey there! Want to know your age in more detail than just
								years? Our Age Calculator is here to help! All you need to do is
								enter your date of birth, and voila! You'll instantly get your
								age in months, weeks, and days. It's a fun and simple tool that
								will help you gain a better understanding of the amount of time
								you've spent on this Earth. We hope you enjoy using it!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AgeCalculator;
