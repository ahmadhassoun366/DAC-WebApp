"use client";
import React from "react";
import { MdOutlineSaveAlt, MdAccountBalance } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import Link from "next/link";

const SideBar = () => {

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
    <div className="w-64 dark:bg-abrandc-dark-grey bg-abrandc-light-grey p-4 m-2 flex flex-col justify-between rounded-xl">
      <div>
        <div className="text-center border-b-2 w-full">
          <h1 className="text-xl font-medium dark:text-white p-1">
            DAC
          </h1>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h1 className="font-bold text-gray-500">Navigation</h1>
          {links.map(({ id, Icon, label, to }) => (
            <Link key={id} href={to} className="flex items-center gap-4 rounded-md hover:bg-blue-100 py-3 px-3" >
              <Icon className="dark:text-gray-300 text-black" />
              <h1 className="dark:text-gray-300 text-black">{label}</h1>
            </Link>
          ))}
          <h1 className="font-bold text-gray-500">Auth Page</h1>
        <button className="flex items-center gap-4 rounded-md hover:bg-blue-100 py-3 px-3">
          <RiLogoutBoxLine className="dark:text-gray-300 text-black" />
          <h1 className="dark:text-gray-300 text-black">Logout</h1>
        </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
