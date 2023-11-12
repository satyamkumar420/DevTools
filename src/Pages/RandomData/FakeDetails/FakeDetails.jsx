import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Loader from '../../../Components/utils/Loader/Loader';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import { toast } from 'react-toastify';
import { toastStyleSuccess } from '../../../Components/utils/Toastify/toastStyle';
import Avatar from '../../../assets/favicon.png';
import { IconCopy } from '../../../Components/Icons/Icons';
import SEO from '../../../Components/MetaTags/SEO';

const FakeDetails = () => {
	const [details, setDetails] = useState({
		// Initial data
		profileImage: Avatar,
		randomName: 'Developer',
		bio: "I'm Engineer",
		randomEmail: 'dev@hotmail.com',
		randomPassword: 'Z30m_y5lhVoXdfD',
		address: '472 Larson Forks',
		company: 'Hartmann - Reinger',
		website: 'https://developer.net/',
		phone: '952-499-1887',
		country: 'Jamaica',
		city: 'Erie',
		state: 'New Jersey',
		Pin: '261919',
	});

	const [isLoading, setIsLoading] = useState(false);

	const generateDetails = () => {
		setIsLoading(true);

		setTimeout(() => {
			setDetails({
				profileImage: faker.image.avatar(),
				randomName: faker.person.fullName(),
				bio: faker.person.bio(),
				randomEmail: faker.internet.email(),
				randomPassword: faker.internet.password(),
				address: faker.location.streetAddress(),
				company: faker.company.name(),
				website: faker.internet.url(),
				phone: faker.phone.number(),
				country: faker.location.country(),
				city: faker.location.city(),
				state: faker.location.state(),
				Pin: faker.finance.pin(6),
			});
			setIsLoading(false);
		}, 500);
	};

	const detailItems = [
		{ label: 'Name', value: details.randomName, Icon: <IconCopy /> },
		{ label: 'Bio', value: details.bio, Icon: <IconCopy /> },
		{ label: 'Email', value: details.randomEmail, Icon: <IconCopy /> },
		{ label: 'Password', value: details.randomPassword, Icon: <IconCopy /> },
		{ label: 'Address', value: details.address, Icon: <IconCopy /> },
		{ label: 'Company', value: details.company, Icon: <IconCopy /> },
		{ label: 'Website', value: details.website, Icon: <IconCopy /> },
		{ label: 'Phone', value: details.phone, Icon: <IconCopy /> },
		{ label: 'PIN Code', value: details.Pin, Icon: <IconCopy /> },
		{ label: 'City', value: details.city, Icon: <IconCopy /> },
		{ label: 'State', value: details.state, Icon: <IconCopy /> },
		{ label: 'Country', value: details.country, Icon: <IconCopy /> },
	];

	// handleCopy function to copy text to clipboard
	const handleCopy = (label, Value) => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(Value);
			toast(`${label} Copied!`, { style: toastStyleSuccess });
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = Value;
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			toast(`${label} Copied!`, { style: toastStyleSuccess });
		}
	};

	return (
		<>
			<SEO
				title={'Online Free Fake Details Generator Tools'}
				description={
					'Online Free Fake Details Generator Tools - We are providing you with the best tools to generate fake details in just a few clicks. We are providing you with the best tools to generate fake details in just a few clicks.'
				}
				keywords={
					'Online Free Fake Details Generator Tools,random fake detail ,Fake Details Generator, Fake Details Generator Tools, Fake Details Generator, random Fake Details Generator Tools, Online Fake Details Generator, Online random Details Generator Tools, Fake Details Generator, Fake Details Generator Tools, Fake Details Generator Generator, Fake Details Generator Generator Tools, Online Fake Details Generator, Online Fake Details Generator Tools, Fake Details Generator, Fake Details Generator Tools, Fake Details Generator, Fake Details Generator Tools,Fake Address Generator - Street, City, State & Zip code'
				}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Fake Details Generator
					</h3>
					<div className="mt-5 items-center">
						<div className="mx-auto justify-start flex gap-3 flex-wrap flex-shrink  ">
							<PrimaryButton
								text="Generate Fake Details"
								onClick={generateDetails}
								className={' text-white px-4 py-2 rounded-md w-full sm:w-60 '}
							/>
						</div>
						{isLoading ? (
							<Loader />
						) : (
							<div className="max-w-screen-sm items-center py-4 px- rounded my-5 bg-[#1a1c2e] shadow-lg">
								<div className="flex justify-center ">
									<img
										src={details.profileImage}
										alt="ProfileLogo"
										className="rounded-full w-14 sm:w-24 text-center"
									/>
								</div>
								<div className="mt-5 px-4">
									{detailItems.map((item, index) => (
										<div
											key={index}
											className="px-2 mb-4 text-sm sm:text-base flex  gap-2 border-1 border-b-2 rounded-sm border-gray-500 text-ellipsis items-center">
											<div className="font-bold">{item.label}</div>
											<strong>:</strong>
											<div className="text-blue-200 text-left  text-ellipsis">
												{item.value}
											</div>
											<div
												onClick={() => handleCopy(item.label, item.value)}
												className="text-blue-300 cursor-pointer">
												{item.Icon}
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								👋 Hey there! If you're someone who cares about their privacy
								and wants to keep their personal information confidential,
								you'll love using this tool. It's totally safe and secure, so
								you can use it with confidence. Give it a try!
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FakeDetails;
