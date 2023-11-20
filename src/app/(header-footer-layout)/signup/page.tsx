import React from "react";
import Image from "next/image";
import imgSignup from "../../../../public/images/imgSignUp.jpg";

const Index = () => {
  return (
    <div className="h-full p-8 flex items-center justify-center">
      <div className="flex gap-1 w-5/6 h-5/6 drop-shadow-lg bg-abrandc-light-grey dark:bg-abrandc-dark-grey ">
        <div className="hidden lg:inline-flex w-1/2">
          <Image src={imgSignup} alt="" />
        </div>
        <div className="lg:w-1/2 lg:pl-20 lg:pr-20  pt-5 pb-5 pl-5 pr-5 dark:text-white text-abrandc-dark-blackish">
          <h1 className="text-center text-3xl font-semibold mb-5">Sign up</h1>
          <form className="text-lg space-y-2">
            <div className="">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                required
                className="w-full h-10 mb-2 px-3 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700  placeholder:text-sm"
              />
            </div>
            <div className="">
              {" "}
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                placeholder="phone"
                name="phone"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-4 w-2/6 font-semibold text-white bg-blue-700 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
