import React, { useState, lazy } from 'react';
import { faker } from '@faker-js/faker';
import PrimaryButton from '../../../Components/utils/Button/PrimaryButton';
import Card from './Card';
import VISA from '../../../assets/visa.svg';
import AMEX from '../../../assets/amex.svg';
import MASTERCARD from '../../../assets/mastercard.svg';
import DISCOVER from '../../../assets/discover.svg';
import MAESTRO from '../../../assets/maestro.svg';
import PAYPAL from '../../../assets/paypal.svg';
import SEO from '../../../Components/MetaTags/SEO';

const CreditCard = () => {
	const [creditCardData, setCreditCardData] = useState('');
	// Function to generate fake credit card data
	const generateCreditCardData = () => {
		const newCreditCardData = {
			cardHolder: faker.person.fullName(),
			cardNumber: faker.finance.creditCardNumber({
				issuer: '25[7-9]#-####-####-###L',
			}),
			validFrom: new Date(faker.date.past()).toLocaleDateString(undefined, {
				month: '2-digit',
				year: 'numeric',
			}),
			validUntil: new Date(faker.date.future()).toLocaleDateString(undefined, {
				month: '2-digit',
				year: 'numeric',
			}),
			cvv: faker.finance.creditCardCVV(),
		};

		setCreditCardData(newCreditCardData);
	};
	// Create an array of data for multiple cards
	const cardDataArray = [
		// initialCreditCardData, // Initial data
		generateRandomCardData(),
		generateRandomCardData(),
		generateRandomCardData(),
	];

	// Function to generate random credit card data
	function generateRandomCardData() {
		return {
			cardHolder: faker.person.fullName(),
			cardNumber: faker.finance.creditCardNumber({
				issuer: '25[7-9]#-####-####-###L',
			}),
			validFrom: new Date(faker.date.past()).toLocaleDateString(undefined, {
				month: '2-digit',
				year: 'numeric',
			}),
			validUntil: new Date(faker.date.future()).toLocaleDateString(undefined, {
				month: '2-digit',
				year: 'numeric',
			}),
			cvv: faker.finance.creditCardCVV(),
			cardLogo: [VISA, AMEX, MASTERCARD, DISCOVER, MAESTRO, PAYPAL][
				Math.floor(Math.random() * 6)
			],
		};
	}
	return (
		<>
			<SEO
				title={'Online Free Credit Card Generator Tools'}
				description={
					'Online free credit card generator tools are software programs that create fake credit card numbers for testing purposes. These tools are commonly used by developers, merchants, and testers to verify their payment systems and fraud detection mechanisms. At devtoo1s.dev, you can find various credit card generator tools that allow you to generate credit card numbers with different formats and data types, such as CVV, expiration date, and issuer identification number. These tools are easy to use and can help you test your credit card processing systems without risking real transactions.'
				}
				keywords={
					'Credit card generator, free credit card generator, credit, card, fake,random credit card'
				}
				url={'https://devtoo1s.dev/random-data/credit-card'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-xl">
					<h3 className="p-2 rounded text-lg  sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Credit Card 💳
					</h3>
					<div className="mt-5 text-center sm:text-left">
						<PrimaryButton
							text={'Generate Credit Card'}
							onClick={generateCreditCardData}
							className={' text-white px-4 py-2 rounded-md w-full sm:w-60 '}
						/>
					</div>
					<div className="mt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
						{cardDataArray.map((cardData, index) => (
							<Card
								key={index}
								cardHolder={cardData.cardHolder}
								cardNumber={cardData.cardNumber}
								validFrom={cardData.validFrom}
								validUntil={cardData.validUntil}
								cvv={cardData.cvv}
								cardLogo={cardData.cardLogo}
								className={
									index % 2 === 0
										? 'bg-gradient-to-br from-slate-900 to-cyan-950'
										: 'bg-gradient-to-tr from-slate-900 to-cyan-950'
								}
							/>
						))}
					</div>

					<div className="mt-10">
						<div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<div className="text-blue-300">
								<p className="mb-1">
									👋 Hey there! Our Credit Card Generator is a super useful tool
									for software developers and testers. It allows you to create
									fictitious credit card data for use in software testing and
									system demonstrations. This way, you can simulate financial
									transactions within your systems without the need to use real
									credit card information. It's perfect for e-commerce systems
									and fintech projects!
								</p>
								<p className="mb-1">
									🪪 By using our generator, you can easily create basic
									information for a fictitious credit card, such as the card
									number, the cardholder's name, the expiration date, and the
									CVV code. However, it's important to note that this data is
									not linked to any real account and is only meant for
									educational and testing purposes. So, it can't be used for
									conducting real financial transactions like payments or
									purchases.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreditCard;
