import "src/components/internal/text-field/text-field.scss";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/internal/button/button.component";
import TextButton from "@/components/internal/text-button/text-button.component";

import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function FooterComponent() {
  const navigation = [
    {
      label: "Explore",
      href: "#",
    },
    {
      label: "Transactions",
      href: "#",
    },
    {
      label: "Nodes",
      href: "#",
    },
    {
      label: "PWR Wallet",
      href: "#",
    },
  ];

  const socials = [
    {
      icon: <FaTwitter size={25} />,
      label: "Join our Twitter",
      href: "#",
    },
    {
      icon: <FaTelegramPlane size={25} />,
      label: "Join our Telegram",
      href: "#",
    },
    {
      icon: <FaDiscord size={25} />,
      label: "Join our Discord",
      href: "#",
    },
  ];

  return (
    <div className="dark:bg-abrandc-dark-grey bg-abrandc-light-grey md:py-20 py-10 overflow-hidden">
      <div className="container-2 mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center items-start gap-y-5">
          {/* Navigation */}
          <div className="flex flex-col gap-y-6 ">
            <Link
              className="text-2xl font-bold dark:text-white text-abrandc-dark-blackish dark:lg:text-3xl"
              href="/"
            >
              DAC
            </Link>
            <div className="grid grid-cols-2 gap-y-4 md:flex md:flex-row items-center gap-x-8">
              {navigation.map((item, idx) => (
                <Link
                  href="/"
                  className="font-medium hover:text-ablue-800 dark:text-white dark:hover:text-ablue-200"
                  key={idx}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* New letter */}
          <div className="flex flex-col gap-y-2">
            <h2 className="text-sm dark:text-white text-abrandc-dark-black font-medium">
              Join our newsletter
            </h2>
            <div className="flex items-center gap-x-2">
              <div className="field w-[212px]">
                <input className="text-field" placeholder="Enter your email" />
              </div>
              <Button className="blue medium w-[116px]">Subscribe</Button>
            </div>
          </div>
        </div>

        <hr className="dark:border-agrey-800 0 border-agrey-200 mt-12" />

        <div className="grid grid-cols-2 gap-y-4 md:flex md:items-center md:gap-x-4 px-2 mt-4 w-full">
          {socials.map((item, index) => (
            <Link
              className="flex items-center gap-x-[26px] dark:bg-white bg-abrandc-dark-grey rounded-[16px] py-3 px-4 h-[60px] w-[134px]"
              key={index}
              href={item.href}
            >
              <i className=" text-white dark:text-black">{item.icon}</i>
              <h2 className="dark:text-black text-white text-xs font-medium leading-[18px]">
                {item.label}
              </h2>
            </Link>
          ))}
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-y-5">
          <h1 className="text-sm font-medium mt-[30px] dark:text-white text-abrandc-dark-black">
            @DAC. All Rights reserved
          </h1>
          <div className="flex gap-x-12 px-8 text-sm font-medium text-agrey-600  md:items-center">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
