"use client";
import React from "react";
import { useParams } from "next/navigation";

const StockDetailedPage = () => {
  const params = useParams();
  console.log(params);
  console.log(params.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Card Detials
      </h1>
      {/* stock detials */}
      <div className="text-3xl ">Id:{params.id}</div>
    </div>
  );
};

export default StockDetailedPage;
