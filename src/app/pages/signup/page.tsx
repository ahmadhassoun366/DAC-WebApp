import React from "react";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-24 flex flex-col items-center justify-center sm:py-24">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-5">
                <h1 className="font-bold   text-gray-900 text-center capitalize text-2xl">
                  Sign up
                </h1>
              </div>
              <form className="divide-y divide-gray-400 my-5">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                  className="w-full h-10 mb-2 px-5"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="phone"
                  placeholder="phone"
                  name="phone"
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <hr />
                <button
                  type="submit"
                  className="mt-4 w-full font-semibold text-white bg-gray-900 py-2 rounded-md"
                >
                  Signup
                </button>
              </form>
              <div className="py-5 text-sm text-center">
                <div className="py-2">Or signup with</div>
                <div className="flex justify-center gap-4">
                  <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white text-white">
                    <img src="icons8-facebook-144.png" alt="" />
                  </button>
                  <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white text-white">
                    <img src="icons8-gmail-144.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
