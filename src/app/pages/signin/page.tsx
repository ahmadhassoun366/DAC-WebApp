"use client";

import { useState, useContext, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import imgLogin from "../../../../public/images/imgLogin.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");

  //   const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   const handleLogin = async (e) => {
  //     // console.log(setPassword);
  //     // console.log(setEmail);
  //     // e.preventDefault();
  //     // try {
  //     //   // Call your login function passing email and password
  //     //   // await login(email, password);
  //     // } catch (error) {
  //     //   toast.error("Invalid email or password"); // Set error message if login fails
  //     // }
  //   };
  return (
    <div className="h-full p-8  flex items-center justify-center">
      <div
        className="flex gap-1 w-5/6 h-5/6 drop-shadow-lg  "
        style={{ backgroundColor: "#CAE2FE" }}
      >
        <div className="hidden lg:inline-flex w-1/2">
          <Image src={imgLogin} alt="" />
        </div>
        <div className="lg:w-1/2 lg:pl-20 lg:pr-20  pt-5 pb-5 pl-5 pr-5 flex items-center flex-col justify-center">
          <h1 className="text-center text-3xl font-semibold mb-8">Sign in</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              className="w-full h-10 mb-2 px-5 rounded-md"
              value={email}
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              name="password"
              required
              className="w-full h-10 mb-2  px-5 rounded-md"
              value={password}
              autoComplete="off"
            />
            <Link
              href="/signup"
              className=" text-sm text-CustomColor1 rounded-md underline-offset-8 underline"
            >
              Don&apos;t have an account?
            </Link>

            <div className="text-center">
              <button
                type="submit"
                className="mt-8 w-2/6 font-semibold text-white bg-blue-700 py-2 rounded-md"
              >
                Submit
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
