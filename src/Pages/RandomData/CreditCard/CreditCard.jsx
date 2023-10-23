import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { faker } from "@faker-js/faker";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import Card from "./Card";
import MasterCardLogo from "../../../assets/mastercard.svg";
import Visa from "../../../assets/visa.svg";
import amex from "../../../assets/amex.svg";
import paypal from "../../../assets/paypal.svg";
import discover from "../../../assets/discover.svg";
import maestro from "../../../assets/maestro.svg";

const CreditCard = () => {
  const [creditCardData, setCreditCardData] = useState("");
  // Function to generate fake credit card data
  const generateCreditCardData = () => {
    const newCreditCardData = {
      cardHolder: faker.person.fullName(),
      cardNumber: faker.finance.creditCardNumber({
        issuer: "25[7-9]#-####-####-###L",
      }),
      validFrom: new Date(faker.date.past()).toLocaleDateString(undefined, {
        month: "2-digit",
        year: "numeric",
      }),
      validUntil: new Date(faker.date.future()).toLocaleDateString(undefined, {
        month: "2-digit",
        year: "numeric",
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
    generateRandomCardData(),
    generateRandomCardData(),
    generateRandomCardData(),
  ];

  // Function to generate random credit card data
  function generateRandomCardData() {
    return {
      cardHolder: faker.person.fullName(),
      cardNumber: faker.finance.creditCardNumber({
        issuer: "25[7-9]#-####-####-###L",
      }),
      validFrom: new Date(faker.date.past()).toLocaleDateString(undefined, {
        month: "2-digit",
        year: "numeric",
      }),
      validUntil: new Date(faker.date.future()).toLocaleDateString(undefined, {
        month: "2-digit",
        year: "numeric",
      }),
      cvv: faker.finance.creditCardCVV(),
      cardLogo: [MasterCardLogo, amex, Visa, paypal, discover, maestro][
        Math.floor(Math.random() * 6)
      ],
    };
  }
  return (
    <>
      <Helmet>
        <title>Credit Card 💳</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-xl">
          <h3 className="p-2 rounded text-lg  sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Credit Card 💳
          </h3>
          <div className="mt-5 text-center sm:text-left">
            <PrimaryButton
              text={"Generate Credit Card"}
              onClick={generateCreditCardData}
              className={"py-2"}
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
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
                    ? "bg-gradient-to-br from-slate-900 to-cyan-950"
                    : "bg-gradient-to-tr from-slate-900 to-cyan-950"
                }
              />
            ))}
          </div>

          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                <p>
                  👋 Hey there! Our Credit Card Generator is a super useful tool
                  for software developers and testers. It allows you to create
                  fictitious credit card data for use in software testing and
                  system demonstrations. This way, you can simulate financial
                  transactions within your systems without the need to use real
                  credit card information. It's perfect for e-commerce systems
                  and fintech projects!
                </p>
                <p>
                  🪪 By using our generator, you can easily create basic
                  information for a fictitious credit card, such as the card
                  number, the cardholder's name, the expiration date, and the
                  CVV code. However, it's important to note that this data is
                  not linked to any real account and is only meant for
                  educational and testing purposes. So, it can't be used for
                  conducting real financial transactions like payments or
                  purchases.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
