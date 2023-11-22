/* eslint-disable @next/next/no-img-element */
"use client";
import "./header.scss";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMoon, FaFilter } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import { Theme } from "@/shared/services/theme/theme.type";
import ROUTES from "@/static/router.data";
import { FiSun } from "react-icons/fi";

export default function HeaderComponent() {
  const pathname = usePathname();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

  const { push } = useRouter();

  // *~~*~~*~~ Mobile menu logic ~~*~~*~~* //
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "#pricing" },
    { label: "Contact", path: "#contact" },
    { label: "FAQ", path: "#faq" },
    
  ];

  return (
    <header className="dark:bg-abrandc-dark-blackish bg-white shadow fixed w-full z-50">
      <nav className="container-2 mx-auto px-6 py-4 sm:py-5 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between ">
          <Link
            className="text-2xl font-bold dark:text-white lg:text-3xl"
            href="/"
          >
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
                className="text-agrey-900 dark:text-white hover:text-blue-500 lg:mx-6"
                href={link.path}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <Link
              className="mt-4 block h-10 transform rounded-full border px-5 py-2 text-center text-sm capitalize bg-blue-600 text-white dark:text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 lg:mt-0 lg:w-auto mr-4"
              href="/login"
            >
              Sign In
            </Link>
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
              {/* <i
							className={`fa-lg fas ${
								currentTheme === 'light' ? 'fa-sun' : 'fa-moon'
							}`}
						></i> */}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
