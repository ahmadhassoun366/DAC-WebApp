"use client";
import React, { useContext, useState } from "react";
import { MdOutlineSaveAlt, MdAccountBalance } from "react-icons/md";
import { FaTable, FaRegUser } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

import Link from "next/link";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import ThemeService from "@/shared/services/theme/theme.service";
const SideBar = () => {
  // *~~*~~*~~ theme svc ~~*~~*~~* //
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  // *~~*~~*~~ theme ~~*~~*~~* //

  const [currentTheme, setCurrentTheme] = useState(themeSvc.theme);
  async function switchTheme() {
    await themeSvc.toggleTheme();
    setCurrentTheme(themeSvc.theme);
  }

  const links = [
    {
      id: 1,
      Icon: RxDashboard,
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      id: 2,
      Icon: MdOutlineSaveAlt,
      label: "Stocks",
      to: "/dashboard/pages/stocks",
    },
    {
      id: 3,
      Icon: FaTable,
      label: "Management",
      to: "/dashboard/pages/management",
    },
    {
      id: 4,
      Icon: MdAccountBalance,
      label: "Accounting",
      to: "/dashboard/pages/accounting",
    },
  ];

  return (
    <div className="w-64 dark:bg-abrandc-dark-grey bg-abrandc-light-grey p-4 m-2 flex flex-col justify-between rounded-xl">
      <div>
        <div className="text-center border-b-2 w-full">
          <h1 className="text-xl font-medium dark:text-white p-1">DAC</h1>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h1 className="font-bold text-gray-500">Navigation</h1>
          {links.map(({ id, Icon, label, to }) => (
            <Link
              key={id}
              href={to}
              className="flex items-center gap-4 rounded-md hover:bg-gray-200 py-3 dark:hover:bg-abrandc-dark-blackish px-3"
            >
              <Icon className="dark:text-gray-300 text-black" />
              <h1 className="dark:text-gray-300 text-black">{label}</h1>
            </Link>
          ))}
          <h1 className="font-bold text-gray-500 w-full border"></h1>
          {/* profile button */}
          <button className="flex items-center gap-4 rounded-md hover:bg-gray-200 py-3 dark:hover:bg-abrandc-dark-blackish px-3">
            <FaRegUser className="dark:text-gray-300 text-black" />
            <h1 className="dark:text-gray-300 text-black">Profile</h1>
          </button>
          {/* toggle themes */}

          <button
            onClick={switchTheme}
            className="flex items-center gap-4 rounded-md hover:bg-gray-200 py-3 dark:hover:bg-abrandc-dark-blackish px-3"
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
            <h1 className="dark:text-gray-300 text-black">Toggle Theme</h1>
          </button>

          <button className="flex items-center gap-4 rounded-md hover:bg-gray-200 py-3 dark:hover:bg-abrandc-dark-blackish px-3">
            <RiLogoutBoxLine className="dark:text-gray-300 text-black" />
            <h1 className="dark:text-gray-300 text-black">Logout</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
