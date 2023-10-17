import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Loader from "../../../Components/utils/Loader/Loader";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";

const FakeDetails = () => {
  const [details, setDetails] = useState({
    // Initial data
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
    }, 1000);
  };

  const detailItems = [
    { label: "Name", value: details.randomName },
    { label: "Bio", value: details.bio },
    { label: "Email", value: details.randomEmail },
    { label: "Password", value: details.randomPassword },
    { label: "Address", value: details.address },
    { label: "Company", value: details.company },
    { label: "Website", value: details.website },
    { label: "Phone", value: details.phone },
    { label: "PIN Code", value: details.Pin },
    { label: "City", value: details.city },
    { label: "State", value: details.state },
    { label: "Country", value: details.country },
  ];

  // handleCopy function to copy text to clipboard
  const handleCopy = (label, Value) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(Value);
      toast(`${label} Copied!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = Value;
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
        <title>Fake Details</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Fake Details
          </h3>
          <div className="mt-5 items-center">
            <div className="mx-auto justify-start flex gap-3 flex-wrap flex-shrink  ">
              <PrimaryButton
                text="Generate Fake Details"
                onClick={generateDetails}
                className="py-2"
              />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="max-w-screen-sm items-center py-4 px- rounded my-5 bg-[#1a1c2e] shadow-lg">
                <div className="flex justify-center mt-5">
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
                      className="px-2 mb-4 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500"
                    >
                      <div className="font-bold">{item.label}</div>
                      <strong>:</strong>
                      <div
                        className="text-blue-300 cursor-pointer"
                        onClick={() => handleCopy(item.label, item.value)}
                      >
                        {item.value}
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
