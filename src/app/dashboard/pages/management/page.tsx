// @ts-nocheck
"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaFileAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { MdWifiProtectedSetup } from "react-icons/md";

export default function Management() {
  return (
    <section className="container mx-auto p-6">
      <div className=" py-1 flex  items-center justify-between  w-full">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Management</h2>
        <h4 className="text-xl text-gray-500">2023</h4>
      </div>
      <div className="p-5">
        <Tabs>
          <TabList>
            <Tab>
              <div className="flex items-center gap-1">
                <FaFileAlt />
                <h1>Main files</h1>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center gap-1">
                <FaChartBar />
                <h1>Reports</h1>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center gap-1">
                <VscSettings />
                <h1>Utilities</h1>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center gap-1">
                <MdWifiProtectedSetup />
                <h1>Setup</h1>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Panel 1 Content</h2>
            <p>Content for the first tab goes here.</p>
          </TabPanel>

          <TabPanel>
            <h2>Panel 2 Content</h2>
            <p>Content for the second tab goes here.</p>
          </TabPanel>

          <TabPanel>
            <h2>Panel 3 Content</h2>
            <p>Content for the third tab goes here.</p>
          </TabPanel>
          <TabPanel>
            <h2>Panel 4 Content</h2>
            <p>Content for the third tab goes here.</p>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}
