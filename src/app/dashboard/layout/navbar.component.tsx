import React from "react";
import { FiSun } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-white dark:bg-abrandc-dark-grey text-black dark:text-white">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold mx-2 hover:text-blue-500">DAC</h1>
      </div>
      {/* social media icons */}
      <div className="flex justify-center items-center">
        <button className="text-2xl font-bold mx-2 hover:text-blue-500">
          <FiSun />
        </button>
      </div>
    </header>
  );
}
