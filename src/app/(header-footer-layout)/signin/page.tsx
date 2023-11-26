"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import imgLogin from "../../../../public/images/imgLogin.png";
import ROUTES from "@/static/router.data";
import AuthContext from "@/shared/services/auth/auth.context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Index = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const authService = useContext(AuthContext);


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(authService.login(email, password), {
      loading: "Logging in...",
      success: () => {
        router.push("/dashboard");
        return <b>Login successful! Redirecting...</b>;
      },
      error: (error) => {
        return <b>{error.message || "An unexpected error occurred"}</b>;
      },
    });
  };

  return (
    <div className="h-full p-8 flex items-center justify-center ">
      <div className="flex gap-1 w-5/6 h-5/6 drop-shadow-lg rounded bg-abrandc-light-grey dark:bg-abrandc-dark-grey">
        <div className="hidden lg:inline-flex w-1/2 bg-abrandc-light-grey dark:bg-abrandc-dark-grey">
          <Image src={imgLogin} alt="Login Image"/>
        </div>
        <div className="lg:w-1/2 lg:pl-20 lg:pr-20  pt-5 pb-5 pl-5 pr-5 flex items-center flex-col justify-center">
          <h1 className="text-center text-3xl font-semibold mb-8 dark:text-white text-abrandc-dark-blackish">
            Sign in
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="dark:text-white text-abrandc-dark-blackish"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="w-full h-10 mb-2 px-5 rounded-md drop-shadow bg-abrandc-light-grey dark:bg-gray-700"
                value={email}
                autoComplete="off"
                onChange={handleEmailChange}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="dark:text-white text-abrandc-dark-blackish"
              >
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                name="password"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow bg-abrandc-light-grey dark:bg-gray-700"
                value={password}
                autoComplete="off"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="">
              {" "}
              <Link
                href={ROUTES.signup}
                className=" text-sm text-CustomColor1 rounded-md underline-offset-8 underline dark:text-blue-500 text-abrandc-dark-blackish"
              >
                Don&apos;t have an account?
              </Link>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-8 w-2/6 font-semibold text-white bg-blue-700 py-2 rounded-md"
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