"use client";
import React, { useState, useEffect } from "react";
import FooterComponent from "./layout/footer.component";
import NavbarComponent from "./layout/navbar.component";
import SidebarComponent from "./layout/sidebar.component";
import { PropsWithChildren } from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};

const Layout = (props: PropsWithChildren) => {
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
      <div className="content flex-1  dark:bg-abrandc-dark-blackish bg-white">
        <NavbarComponent />
        {isChildrenLoading ? <Spinner /> : <> {props.children}</>}
        <FooterComponent />
      </div>
    </div>
  );
};

export default Layout;
