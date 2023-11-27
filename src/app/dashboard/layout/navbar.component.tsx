import React,{useContext,useState} from "react";
import { FiSun } from "react-icons/fi";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import ThemeService from "@/shared/services/theme/theme.service";
import { Theme } from "@/shared/services/theme/theme.type";

export default function Header() {

  const themeSvc = useContext<ThemeService>(ThemeSvcContext);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themeSvc.theme);

  function toggleTheme() {
    themeSvc.toggleTheme();
    setCurrentTheme(themeSvc.theme);
  }
  return (
    <header className="flex justify-between items-center p-3 bg-white dark:bg-abrandc-dark-grey text-black dark:text-white">
      <div className="flex justify-center items-center">
        <h1 className="mx-2 hover:text-blue-500">DAC</h1>
      </div>
      {/* social media icons */}
      <div className="flex justify-center items-center">
      <button
            className="theme_btn text-agrey-500 dark:text-white "
            onClick={toggleTheme}
          >
            {currentTheme === "light" ? (
              <div className="select-none">
                <i className="fa-lf fas fa-moon" />
              </div>
            ) : (
              <div className="dark:text-white">
                <FiSun />
              </div>
            )}
          </button>
      </div>
    </header>
  );
}
