"use client";
import React, { useContext, useState } from "react";
import { MdOutlineSaveAlt, MdAccountBalance } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import ThemeService from "@/shared/services/theme/theme.service";
import { Theme } from "@/shared/services/theme/theme.type";
import Link from "next/link";
const SideBar = () => {
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themeSvc.theme);

  function toggleTheme() {
    themeSvc.toggleTheme();
    setCurrentTheme(themeSvc.theme);
  }

  const links = [
    {
      id: 1,
      Icon: MdOutlineSaveAlt,
      label: "Stocks",
      to: "/dashboard/pages/stocks",
    },
    {
      id: 2,
      Icon: FaTable,
      label: "Management",
      to: "/dashboard/pages/management",
    },
    {
      id: 3,
      Icon: MdAccountBalance,
      label: "Accounting",
      to: "/dashboard/pages/accounting",
    },
  ];

  return (
    <div className="w-64 dark:bg-abrandc-dark-grey bg-abrandc-light-grey p-4 shadow-2xl  flex flex-col justify-between">
      <div>
        <div className="mb-6 py-2 flex  items-center justify-between border-b-2 w-full">
          <h1 className="text-2xl font-bold dark:text-white lg:text-3xl">
            DAC
          </h1>
          <button
            className="theme_btn text-agrey-500 dark:text-white "
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

        <div className="flex flex-col gap-6">
          {links.map(({ id, Icon, label, to }) => (
            <Link key={id} href={to} className="flex items-center gap-4 py-2">
              <Icon className="dark:text-gray-300 text-black" />
              <h1 className="dark:text-gray-300 text-black">{label}</h1>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full">
        <button className="flex items-center gap-4 py-2">
          <RiLogoutBoxLine className="dark:text-gray-300 text-black" />
          <h1 className="dark:text-gray-300 text-black">Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
