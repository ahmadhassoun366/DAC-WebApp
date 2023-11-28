"use client";
import React from "react";
import { useParams } from "next/navigation";
import { IoStorefrontOutline } from "react-icons/io5";
import Button from "@/components/internal/button/button.component";

const StockDetailedPage = () => {
  const params = useParams();
  console.log(params);
  console.log(params.id);

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    //     Card Detials
    //   </h1>

    //   {/* stock detials */}
    //   <div className="text-3xl ">Id:{params.id}</div>
    // </div>
    <div className="container mx-auto">

      <div >
        <div className="flex items-center mb-4 gap-1">
          <div
            className={`rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-300/40 text-white shadow-lg grid place-items-center p-2`}
          >
            <IoStorefrontOutline size={25} /></div>
          <h1 className="font-semibold dark:text-white">
            Name Store</h1>
        </div>
        <h1 className="font-medium mb-2 dark:text-white">Store Information:</h1>
        <div className="dark:bg-abrandc-dark-grey bg-abrandc-light-grey drop-shadow p-2 rounded-md">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <p className="dark:text-white">Inventory Account Number: 29384</p>
            <p className="dark:text-white">Address: Lorem ipsum dolor sit amet.</p>
            <p className="dark:text-white">Assets Account Number: </p>
            <p className="dark:text-white">Lorem ipsum dolor, </p>
            <p className="dark:text-white">Lorem ipsum dolor, sit amet consectetur </p>
            <p className="dark:text-white">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="font-medium mb-2 dark:text-white">Selected Item:</h1>

        <div className="dark:bg-abrandc-dark-grey bg-abrandc-light-grey drop-shadow p-2 rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="dark:text-white">Total Price: 30$</h1>
            <Button className="bg-blue-500 text-white shadow hover:bg-blue-600">
              Manage Items
            </Button>
          </div>
          <table className="table-fixed w-full border-separate border border-slate-400 mt-3">
            <thead>
              <tr className="bg-blue-400">
                <th className="border border-slate-300 ... dark:text-white">Name</th>
                <th className="border border-slate-300 ... dark:text-white">Description</th>
                <th className="border border-slate-300 ... dark:text-white">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-slate-300 ... dark:text-white">Lorem ipsum dolor sit amet.</th>
                <th className="border border-slate-300 ... dark:text-white">Lorem, ipsum.</th>
                <th className="border border-slate-300 ... dark:text-white">Lorem ipsum dolor sit amet consectetur.</th>
              </tr>
              <tr>
                <th className="border border-slate-300 ... dark:text-white">Lorem ipsum dolor sit amet consectetur.</th>
                <th className="border border-slate-300 ... dark:text-white">Lorem, ipsum dolor.</th>
                <th className="border border-slate-300 ... dark:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex reprehenderit modi qui.</th>
              </tr>
              <tr>
                <th className="border border-slate-300 ... dark:text-white">State</th>
                <th className="border border-slate-300 ... dark:text-white">City</th>
                <th className="border border-slate-300 ... dark:text-white">City</th>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default StockDetailedPage;
