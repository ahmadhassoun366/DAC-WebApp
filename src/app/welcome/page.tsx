"use client"
// Import the component with an uppercase letter
import react,{ useContext, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import AdsCard from './layoutCards/ads.component';
import CompanyCard from './layoutCards/company.component';
import ItemCard from './layoutCards/product.component';
import ThemeService from '@/shared/services/theme/theme.service';
import ThemeSvcContext from '@/shared/services/theme/theme.context';
import { Theme } from "@/shared/services/theme/theme.type";
import { MdAccountCircle } from "react-icons/md";
import FooterComponent from '@/layout/footer/footer.component';
import { ServicesCard } from './layoutCards/services.component';
export default function Welcome() {

  // *~~*~~*~~ Theme ~~*~~*~~* //
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  const [currentTheme, setCurrentTheme] = useState<Theme>(themeSvc.theme);

  function toggleTheme() {
    themeSvc.toggleTheme();
    setCurrentTheme(themeSvc.theme);
  }
  return (
    <div className='container mx-auto dark:bg-abrandc-dark-blackish h-full'>
      <div className='flex justify-between p-3 m-2 items-center rounded-md dark:bg-abrandc-dark-grey bg-abrandc-light-grey drop-shadow '>
        <h1 className='dark:text-white'>DAC</h1>
        <div className='flex gap-2 items-center'>
          <input type="text" className='rounded-lg p-1 dark:text-white dark:bg-abrandc-dark-blackish border-2 dark:border-indigo-500/100' placeholder='Search ...'  />

          <button
            className="theme_btn text-agrey-500 dark:text-white"
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
            <MdAccountCircle  size={25} className="dark:text-gray-300 text-black"  />
        </div>

      </div>
      <div>

        <div className='w-full h-1/6 p-3'>
          <AdsCard />
        </div>

        <div>
          <h1 className='text-center dark:text-white text-2xl font-mono ... '>Companies</h1>
          <div className='grid grid-rows-2 grid-flow-col gap-4 flex justify-center'>
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
          <div className='flex justify-center mt-4'>
          <button className='text-blue-700'>more ...</button>
          </div>
        </div>
        <div>
          <h1 className='text-center text-2xl font-mono ... mt-5'>Items</h1>

          <div className='grid grid-rows-2 grid-flow-col gap-4 flex justify-center'>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
          <div className='flex justify-center mt-4'>
          <button className='text-blue-700'>more ...</button>
          </div>
        </div>
        <div className='mb-2'>
          <h1 className='text-center text-2xl font-mono ... mt-5'>Services</h1>
          <div className='grid grid-rows-1 grid-flow-col gap-4 flex justify-center'>
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
          </div>
          <div className='flex justify-center mt-4'>
          <button className='text-blue-700'>more ...</button>
          </div></div>
        </div>
      <FooterComponent />
    </div>
  );
}
