import React from "react";
import Link from "next/link";
import { MdOutlineSaveAlt, MdAccountBalance } from "react-icons/md";
import { FaTable } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";



const SideBar = () => {
  return (
    <div className="md:h-screen md:w-1/6 bg-abrandc-light-grey md:fixed md:left-0 md:top-0 md:overflow-x-hidden md:px-6 md:py-3 drop-shadow-md ">
      <div>
        <div className="flex items-center justify-between mb-6 border-b-2	">
          <h1 className="font-medium">DAC</h1>
          <button>Md</button>
        </div>

        <div className="flex flex-col gap-6">
            <button className="flex items-center gap-1 "><MdOutlineSaveAlt />Stocks</button>
            <button className="flex items-center gap-1"><FaTable />Management</button>
            <button className="flex items-center gap-1"><MdAccountBalance />Accounting</button>
        </div>
        <div className="absolute bottom-2 left-3 w-5/6 border-t-2 ">
          <button className="flex items-center gap-1"><RiLogoutBoxLine />Logout</button>
        </div>
      </div>


    </div>
  );
};

{/* <li>
                <Link href="/dashboard/stocks">
                  <a>Stocks</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/management">
                  <a>Management</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/accounting">
                  <a>Accounting</a>
                </Link>
              </li> */}

export default SideBar;
