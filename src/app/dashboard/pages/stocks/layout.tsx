"use client";
import React, { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 py-4 dark:bg-abrandc-dark-blackish bg-white flex flex-col">
        <div className="flex-1"> {children}</div>
      </div>
    </div>
  );
}
