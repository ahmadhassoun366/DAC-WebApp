"use client";
import React from "react";
import Image from "next/image";
import imgSignup from "../../../../public/images/imgSignUp.jpg";
import Link from "next/link";
import ROUTES from "@/static/router.data";
import AuthContext from "@/shared/services/auth/auth.context";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useState, useContext } from "react";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

const Index = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const authService = useContext(AuthContext);
  const signupMutation = useMutation(
    (newUser: SignupFormData) =>
      authService.signup(
        newUser.firstName,
        newUser.lastName,
        newUser.phone,
        newUser.email,
        newUser.password,
        newUser.passwordConfirm
      ),
    {
      onSuccess: () => {
        toast.success("Signup successful! Redirecting...");
        // Redirect to dashboard or login page
      },
      onError: (error: any) => {
        toast.error(error.message || "An unexpected error occurred");
      },
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Current formData:", formData);

    e.preventDefault();
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (formData.password !== formData.passwordConfirm) {
      console.log("Password and confirm password do not match");
      toast.error("Passwords do not match");
      return;
    }
    console.log("Passwords match. Proceeding with signup...");
    signupMutation.mutate(formData);
  };

  return (
    <div className="h-full p-8 flex items-center justify-center">
      <div className="flex gap-1 w-5/6 h-5/6 drop-shadow-lg bg-abrandc-light-grey dark:bg-abrandc-dark-grey ">
        <div className="hidden lg:inline-flex w-1/2">
          <Image src={imgSignup} alt="" />
        </div>
        <div className="lg:w-1/2 lg:px-10  p-5 dark:text-white text-abrandc-dark-blackish">
          <h1 className="text-center text-3xl font-semibold mb-5">Sign up</h1>
          <form className="text-lg space-y-2" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  required
                  className="w-full h-10 mb-2 px-3 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700  placeholder:text-sm"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="lastName">last name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                  className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="passwordConfirm">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                required
                className="w-full h-10 mb-2  px-5 rounded-md drop-shadow-sm bg-abrandc-light-grey dark:bg-gray-700 placeholder:text-sm"
                onChange={handleChange}
              />
            </div>
            <Link
              href={ROUTES.signin}
              className="text-base text-blue-500 underline underline-offset-4"
            >
              Already Have an account?
            </Link>
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
