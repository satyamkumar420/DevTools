import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { faker } from "@faker-js/faker";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { IconCopy } from "../../../Components/Icons/Icons";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";

const CreditCard = () => {
  // Define the initial credit card data
  const initialCreditCardData = {
    cardHolder: "Dr. Linda Schiller",
    cardNumber: "3558-6403-7893-7729",
    validFrom: "03/2023",
    validUntil: "02/2024",
    cvv: "796",
  };

  const [creditCardData, setCreditCardData] = useState(initialCreditCardData);

  // Function to generate fake credit card data
  const generateCreditCardData = () => {
    const newCreditCardData = {
      cardHolder: faker.person.fullName(),
      cardNumber: faker.finance.creditCardNumber(16).substring(0),
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

  // handleCopy function to copy text to clipboard
  const handleCopy = (label, text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      toast(`${label} Copied!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`${label} Copied!`, { style: toastStyleSuccess });
    }
  };

  return (
    <>
      <Helmet>
        <title>Credit Card 💳</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Credit Card 💳
          </h3>
          <div className="mt-5 text-center sm:text-left">
            <PrimaryButton
              text={"Generate Credit Card"}
              onClick={generateCreditCardData}
              className={"py-3"}
            />
          </div>
          <div className="w-full sm:w-96 h-60 m-auto bg-gradient-to-r from-slate-900 to-cyan-800 bg-cyan-900 rounded-xl relative text-white shadow-2xl  my-5">
            <div className="w-full p-5">
              <div className="flex justify-between">
                <div className="text-left">
                  <p className="font-light">Name</p>
                  <div className="flex gap-1">
                    <p className="font-medium tracking-widest">
                      {creditCardData.cardHolder}
                    </p>
                    <IconCopy
                      className="cursor-pointer text-green-400"
                      onClick={() =>
                        handleCopy("Card Name", creditCardData.cardHolder)
                      }
                    />
                  </div>
                </div>
                <img
                  className="w-14 h-14"
                  src="https://i.imgur.com/bbPHJVe.png"
                />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <div className="flex gap-1">
                  <p className="font-medium tracking-more-wider">
                    {creditCardData.cardNumber}
                  </p>
                  <IconCopy
                    className="cursor-pointer text-green-400"
                    onClick={() =>
                      handleCopy("Card Number", creditCardData.cardNumber)
                    }
                  />
                </div>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex gap-4 justify-between">
                  <div className="">
                    <p className="font-light text-base">Valid From</p>
                    <div className="flex gap-1 ">
                      <p className="font-medium tracking-wider text-base">
                        {creditCardData.validFrom}
                      </p>
                      <IconCopy
                        className="cursor-pointer text-green-400"
                        onClick={() =>
                          handleCopy("Valid From ", creditCardData.validFrom)
                        }
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="font-light text-base">Valid Until</p>
                    <div className="flex gap-1">
                      <p className="font-medium tracking-wider text-base">
                        {creditCardData.validUntil}
                      </p>
                      <IconCopy
                        className="cursor-pointer text-green-400"
                        onClick={() =>
                          handleCopy("Valid Until", creditCardData.validUntil)
                        }
                      />
                    </div>
                  </div>

                  <div className="">
                    <p className="font-light text-base">CVV</p>
                    <div className="flex gap-1">
                      <p className="font-medium tracking-more-wider text-base">
                        {creditCardData.cvv}
                      </p>
                      <IconCopy
                        className="cursor-pointer text-green-400"
                        onClick={() =>
                          handleCopy("CVV Number", creditCardData.cvv)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
