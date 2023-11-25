"use client";

// import WOMLogo from 'data-base64:src/assets/logo/WOM-Logo.svg';
import { useContext, useEffect, useState } from "react";

import ThemeSvcContext from "@/shared/services/theme/theme.context";
import ThemeService from "@/shared/services/theme/theme.service";

type AppInitProps = {
  children: React.ReactNode;
};

export default function AppInit({ children }: AppInitProps) {
  // *~~*~~*~~ Auth svc ~~*~~*~~* //
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  // *~~*~~*~~ state ~~*~~*~~* //
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      // *~~*~~*~~ LOAD THEME ~~*~~*~~* //

      if (typeof window === "undefined" || !document.querySelector("html"))
        return;

      document.querySelector("html")!.classList.add("light");

      await themeSvc.loadTheme();

      setLoaded(true);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: add loading screen
  if (!loaded) {
    return (
      <div className="bg-white w-screen h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold ">Loading...</h1>
      </div>
    );
  }

  return <div>{children}</div>;
}
