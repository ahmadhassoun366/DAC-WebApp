"use client";
import React, { useState, useEffect } from "react";
import FooterComponent from "./layout/footer.component";
import SidebarComponent from "./layout/sidebar.component";
import Header from "./layout/navbar.component";

const Spinner = () => {
  return (
    <div className="flex-1 flex items-center justify-center dark:bg-abrandc-dark-blackish bg-white bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isChildrenLoading, setChildrenLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChildrenLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen">
      <SidebarComponent />
      <div className="container mx-auto p-6 flex-1 dark:bg-abrandc-dark-blackish bg-white flex flex-col">
        
        <Header/>
        {isChildrenLoading ? (
          <Spinner />
        ) : (
          <div className="flex-1"> {children}</div>
        )}
        <FooterComponent />
      </div>
    </div>
  );
}
