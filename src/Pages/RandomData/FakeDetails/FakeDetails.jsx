import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const FakeDetails = () => {
  const [details, setDetails] = useState({
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

  const generateDetails = () => {
    setDetails({
      profileImage: faker.image.avatar(),
      randomName: faker.person.fullName(),
      bio: faker.person.bio(),
      randomEmail: faker.internet.email(),
      randomPassword: faker.internet.password(),
      address: faker.location.streetAddress(),
      company: faker.company.name(),
      website: faker.internet.url(),
      // TODO how to get only phone number
      phone: faker.phone.number(),
      country: faker.location.country(),
      city: faker.location.city(),
      state: faker.location.state(),
      Pin: faker.finance.pin(6),
    });
  };

  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Fake Details
        </h3>
        <div className="mt-5 ">
          <button
            onClick={generateDetails}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Generate
          </button>
        </div>
        <div className="mx-auto justify-center flex gap-3 flex-wrap flex-shrink  jus ">
          <div className=" items-center max-w-[500px] py-4 px-3 rounded my-5 bg-[#1a1c2e] shadow-lg">
            <div className="flex justify-center mt-5">
              <img
                src={details.profileImage}
                alt="ProfileLogo"
                className="rounded-full w-14 sm:w-24 text-center"
              />
            </div>
            <div className="mt-5 px-4">
              <div className="px-2 mb-4 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold"> Name:</div>
                <div className="text-blue-300"> {details.randomName}</div>
              </div>
              <div className="px-2 mb-4 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold"> Bio:</div>
                <div className="text-blue-300"> {details.bio}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold text-base"> Email:</div>
                <div className="text-blue-300"> {details.randomEmail}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Password:</div>
                <div className="text-blue-300"> {details.randomPassword}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Street Address:</div>
                <div className="text-blue-300"> {details.address}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold"> Company:</div>
                <div className="text-blue-300"> {details.company}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Website:</div>
                <div className="text-blue-300"> {details.website}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Phone:</div>
                <div className="text-blue-300"> {details.phone}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">PIN Code:</div>
                <div className="text-blue-300">{details.Pin}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">City:</div>
                <div className="text-blue-300">{details.city}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">State:</div>
                <div className="text-blue-300">{details.state}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Country:</div>
                <div className="text-blue-300">{details.country}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              With just a simple refresh of the page, this powerful tool creates
              unique personal details such as name, email, password, address,
              bio, and country. Enjoy the convenience and efficiency of this
              amazing feature.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeDetails;
