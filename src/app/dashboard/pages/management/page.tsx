// @ts-nocheck
"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaFileLines } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import MainFiles from "./tabs/mainFailes.component";
import Reports from "./tabs/reports.component";
import Utilities from "./tabs/utilities.component";
import Setup from "./tabs/setup.component";

export default function Management() {
  const [activeTab, setActiveTab] = useState("html");

  const data = [
    {
      label: "Main Files",
      value: "Main files",
      icon: FaFileLines,

    },
    {
      label: "Reports",
      value: "report",
      icon: FaChartBar,

    },
    {
      label: "Utilities",
      value: "Utilities",
      icon: IoIosSettings,

    },
    {
      label: "Setup",
      value: "Setup",
      icon: MdOutlineWifiProtectedSetup,

    },
  ];
  return (
    <div className="container">
      <div className=" flex items-center justify-between w-full border-b border-gray-200 dark:border-gray-700 mb-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Management
        </h2>
        <h4 className="text-xl text-gray-500">2023</h4>
      </div>
      <Tabs value={activeTab} id="custom-animation">
        <TabsHeader className="dark:bg-abrandc-dark-grey bg-abrandc-light-grey">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} onClick={() => setActiveTab(value)}
              className={activeTab === value ? "bg-blue-600 rounded text-white" : ""}>
              <div className="flex items-center gap-1 dark:text-white">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="dark:text-white">
              {value === "Main files" && <MainFiles />}
              {value === "report" && <Reports />}
              {value === "Utilities" && <Utilities />}
              {value === "Setup" && <Setup />}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
