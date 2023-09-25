import React, { useState } from "react";
import { en, faker } from "@faker-js/faker";

const FakeDetails = () => {
  const profileImage = faker.image.avatar();
  const randomName = faker.person.fullName();
  const bio = faker.person.bio();
  const randomEmail = faker.internet.email();
  const randomPassword = faker.internet.password();
  const address = faker.location.streetAddress();
  const company = faker.company.name();
  const website = faker.internet.url();
  const phone = faker.phone.number();
  const country = faker.location.country();
  const city = faker.location.city();
  const state = faker.location.state();
  const Pin = faker.finance.pin(6);

  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Fake Details
        </h3>
        <div className="mx-auto justify-center flex ">
          <div className=" items-center  py-4 px-3 rounded my-5 bg-[#1a1c2e] shadow-lg">
            <div className="flex justify-center mt-5">
              <img
                src={profileImage}
                alt="ProfileLogo"
                className="rounded-full w-14 sm:w-24 text-center"
              />
            </div>
            <div className="mt-5 px-4">
              <div className="px-2 mb-4 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold"> Name:</div>
                <div className="text-blue-300"> {randomName}</div>
              </div>
              <div className="px-2 mb-4 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold"> Bio:</div>
                <div className="text-blue-300"> {bio}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold text-base"> Email:</div>
                <div className="text-blue-300"> {randomEmail}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Password:</div>
                <div className="text-blue-300"> {randomPassword}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Street Address:</div>
                <div className="text-blue-300"> {address}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold"> Company:</div>
                <div className="text-blue-300"> {company}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Website:</div>
                <div className="text-blue-300"> {website}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Phone:</div>
                <div className="text-blue-300"> {phone}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">PIN Code:</div>
                <div className="text-blue-300">{Pin}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">City:</div>
                <div className="text-blue-300">{city}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">State:</div>
                <div className="text-blue-300">{state}</div>
              </div>
              <div className="mb-4 px-2 text-sm sm:text-base flex flex-wrap gap-2 border-1 border-b-2 rounded-sm border-gray-500">
                <div className="font-bold">Country:</div>
                <div className="text-blue-300">{country}</div>
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
