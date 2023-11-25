/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import React, { useContext, useState } from "react";

import ThemeSvcContext from "@/shared/services/theme/theme.context";
import ThemeService from "@/shared/services/theme/theme.service";
import { Theme } from "@/shared/services/theme/theme.type";

import Button from "@/components/internal/button/button.component";
import { FiSun } from "react-icons/fi";

import ROUTES from "@/static/router.data";
import "./header.scss";

export default function HeaderComponent() {
  const pathname = usePathname();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navigation = [
    {
      label: "Explore",
      href: "#",
    },
    {
      label: "Blockchain",
      href: "#",
    },
    {
      label: "Tokens",
      href: "#",
    },
    {
      label: "NFTs",
      href: "#",
    },
  ];

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);

    const html = document.querySelector("html");

    if (mobileNavOpen) {
      html?.classList.remove("overflow-hidden");
    } else {
      html?.classList.add("overflow-hidden");
    }
  };

  // *~~*~~*~~ Theme ~~*~~*~~* //
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  const [currentTheme, setCurrentTheme] = useState<Theme>(themeSvc.theme);

  function toggleTheme() {
    themeSvc.toggleTheme();
    setCurrentTheme(themeSvc.theme);
  }

  // *~~*~~*~~ Search bar logic ~~*~~*~~* //
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "#pricing" },
    { label: "Contact", path: "#contact" },
    { label: "FAQ", path: "#faq" },
  ];
  return (
<<<<<<< HEAD
    <header className="dark:bg-abrandc-dark-blackish bg-white shadow fixed w-full z-50">
      <nav className="container-2 mx-auto px-6 py-4 sm:py-5 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <Link className="text-2xl font-bold dark:text-white lg:text-3xl" href="/">
            DAC
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="dark:text-gray-200 hover:text-gray-200 focus:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full 
        
        gap-64  px-6 py-4  transition-all duration-300 ease-in-out lg:relative lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100`}
        >
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-20 lg:flex-row">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className="text-black-700 dark:text-white hover:text-blue-500 lg:mx-6"
                href={link.path}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:gap-5">
          <Link
            className="mt-4 block h-10 transform rounded-full bg-blue-500 px-5 py-2 text-center text-sm capitalize text-white dark:text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 lg:mt-0 lg:w-auto mr-4"
            href="/login"
=======
    <nav className="dark:bg-abrandc-dark-blackish bg-white  shadow ">
      <div className="container-2 mx-auto flex items-center justify-between h-[80px]">
        {/* brand */}
        <Link
          href={ROUTES.root}
          className="text-2xl font-bold dark:text-white lg:text-3xl"
        >
          DAC
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-x-6  h-full">
          {/* <div className="h-full grid place-items-center">
            <Link
              href={ROUTES.root}
              className={`navbar-link ${
                pathname === ROUTES.root ? "active" : ""
              }`}
            >
              Explore
            </Link>
          </div>

          <div className="navbar-dropdown relative  h-full grid place-items-center cursor-pointer">
            <button className="text-sm font-medium text-agrey-900 dark:text-white flex items-center gap-x-2 ">
              <div>Blockchain</div>
              <i className="fa-lg far fa-angle-down"></i>
            </button>
            <div
              id="dropdown"
              className="nav-dropdown-menu absolute top-full left-0 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-abrandc-dark-grey"
            ></div>
          </div> */}
          {navLinks.map((link) => (
            <a
              key={link.path}
              className="text-agrey-900 dark:text-white hover:text-blue-500 lg:mx-6"
              href={link.path}
            >
              {link.label}
            </a>
          ))}
          {/* <Button className="secondary medium w-[106px]">Connect</Button> */}
          <Button
            className="blue medium w-[117px]"
            tag_type="link"
            href="https://chrome.google.com/webstore/category/extensions"
            target="_blank"
            rel="noopener noreferrer"
>>>>>>> 375f27ffc1d69a2143b9bb45035a0abd58f40607
          >
            Sign In
          </Button>

          <button
            className="theme_btn text-agrey-500 dark:text-white"
            onClick={toggleTheme}
          >
            {currentTheme === "light" ? (
              <div className="select-none">
                <i className="fa-lf fas fa-moon" />
              </div>
            ) : (
              <div className="dark:text-white">
                <FiSun />
              </div>
            )}
          </button>
          </div>
        </div>

        {/* Mobile burger icon */}
        <div className="md:hidden">
          {/* This is a simple burger icon. You can replace this with any SVG or icon library you prefer. */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className={`burger ${mobileNavOpen ? "active" : ""}`}
            aria-controls="navbar-sticky"
            aria-expanded="true"
            onClick={toggleMobileNav}
          >
            <div className="h-line h-line1"></div>
            <div className="h-line h-line2"></div>
            <div className="h-line h-line3"></div>
          </button>
        </div>

        {/* Mobile navigation menu */}
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 w-full h-full dark:bg-abrandc-dark-blackish bg-white md:hidden z-50 p-4 mt-header space-y-6">
            {/* Search */}

            {/* links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  className=" font-medium text-agrey-900 dark:text-white flex items-center gap-x-2  justify-between w-full"
                  href={link.path}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* buttons */}
            <div className="flex justify-between gap-4">
              {/* <Button className="secondary medium w-2/4">Connect</Button> */}
              <Button
                className="blue medium w-full"
                tag_type="link"
                href="https://chrome.google.com/webstore/category/extensions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </Button>
            </div>

            {/* theme */}
            <div className="space-y-2">
              <h1 className="text-agrey-500 dark:text-agrey-600">Interface</h1>
              <div className="w-full bg-agrey-50 dark:bg-agrey-900 flex justify-between h-[52px] px-4 py-2 rounded-lg  items-center ">
                <div className=" text-agrey-500 dark:text-white">
                  <i
                    className={`fa-lg fas ${
                      currentTheme === "light" ? "fa-sun" : "fa-moon"
                    }`}
                  ></i>
                </div>

                <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                  <label className="relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentTheme === "dark"}
                      className="sr-only peer"
                      onChange={toggleTheme}
                    />
                    <div className="w-11 h-6 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
