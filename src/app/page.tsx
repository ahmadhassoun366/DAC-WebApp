import Image from "next/image";
import HeaderComponent from "@/layout/header/header.component";
import FooterComponent from "@/layout/footer/footer.component";
import Link from "next/link";
import bg from "../../public/images/imgbg.gif";
import imgSB from "../../public/images/img2.gif";
import { BiBlock } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { plans, services } from "@/static/data";

export default function Home() {
  return (
    <>
      <HeaderComponent />

      <main className="dark:bg-abrandc-dark-blackish bg-white">
        {/* Hero Section */}
        <main className="dark:bg-abrandc-dark-blackish bg-white container-2 mx-auto space-y-20">
          <section className="py-20">
            <div className="grid max-w-screen-xxl px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:m-auto ">
              <div className="lg:m-auto place-self-center lg:col-span-7 z-10 text-center lg:text-start">
                <h1 className="max-w-2xl mb-6 text-4xl leading-none md:text-5xl xl:text-4xl text-abrandc-dark-blackish dark:text-white font-spaceGrotesk font-bold">
                  Efficient Business Management
                </h1>
                <p className="lg:w-3/4 mb-6 font-light lg:text-gray-400 lg:mb-8 md:text-lg lg:text-xl text-gray-900">
                  Empowering Your Business with Seamless Accounting and Store
                  Management
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 focus:ring-1 focus:ring-gray-300 hover:bg-blue-700"
                >
                  Get started
                  <GoArrowRight className="mx-1" size={25} />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-1 focus:ring-gray-900"
                >
                  Speak to Sales
                </Link>
              </div>
              <div className="mt-0 ml-0 lg:col-span-5 flex">
                <Image
                  src={bg}
                  alt=""
                  className="lg:w-full absolute top-10 m-auto blur-[20px] lg:blur-[0] lg:relative z-0 mr-0"
                />
              </div>
            </div>
          </section>

          {/* Partnerships Section */}
          <section
            id="contact"
            className="container mx-auto px-6 py-16 pt-10 text-center"
          >
            <div className="m-auto mt-2 max-w-screen-xxl ">
              <h1 className="text-2xl mb-20 font-bold dark:text-white text-abrandc-dark-blackish md:text-4xl">
                Strategic Business Solution Partnerships
              </h1>
              <div className="flex max-w-screen-xxl">
                <div className="hidden lg:mt-0 lg:ml-0 lg:col-span-5 flex-1 lg:flex">
                  <Image
                    src={imgSB}
                    alt=""
                    className="w-2/3 sm:w-full md:w-2/3 lg:w-full drop-shadow-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h1 className="ml-0 text-left text-3xl font-bold dark:text-white text-abrandc-dark-blackish mb-4">
                    Title
                  </h1>
                  <p className="text-gray-500 text-justify  whitespace-pre-line p-4">
                    Under our Strategic Business Solution Partnerships, we
                    collaborate with diverse businesses aiming to streamline
                    their operations and enhance their productivity. From
                    accounting to store management and beyond, our comprehensive
                    suite of services caters to your unique business needs. Join
                    us to redefine your business strategies, optimize efficiency
                    and drive your business towards prolific growth.
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-20 w-full max-w-sm rounded-md border bg-transparent focus-within:border-gray-400 focus-within:ring focus-within:ring-gray-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-gray-300">
                <form className="md:flex-row flex border border-black rounded-md">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200"
                  />

                  <button
                    type="button"
                    className="m-1 h-10 transform rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-500 focus:bg-gray-200 focus:outline-none"
                  >
                    Join Us
                  </button>
                </form>
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section id="faq" className="">
            <div className="space-y-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="md:text-4xl font-extrabold text-gray-900 dark:text-white">
                  Designed for business teams like yours
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 w-3/4">
                  Here at Flowbite we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
                </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {services.map((service, index) => (
                  <div key={index} className="dark:bg-abrandc-dark-grey bg-abrandc-light-grey rounded-xl p-4">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                      <service.icon className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Price Section */}
          <section id="pricing" className="">
            <div className="container mx-auto px-6 pt-28">
              <div
                className="xl:-mx-8 xl:flex xl:items-center"
                style={{ paddingBottom: "6%" }}
              >
                <div className="flex flex-col items-center xl:mx-8 xl:items-start">
                  <h1 className="text-3xl font-medium capitalize text-gray-800 dark:text-white lg:text-4xl">
                    Our Pricing Plan
                  </h1>

                  <div className="mt-4">
                    <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                    <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                    <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                  </div>

                  <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
                    You can get All Access by selecting your plan!
                  </p>

                  <Link
                    href="#"
                    className="-mx-1 mt-4 flex items-center text-sm capitalize text-gray-700 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    <span className="mx-1">read more</span>
                    <FaLongArrowAltRight className="mx-1" size={20} />
                  </Link>
                </div>

                <div className="flex-1 xl:mx-8 ">
                  <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    {plans.map((plan, index) => (
                      <div
                        key={index}
                        className="mx-auto max-w-sm rounded-lg border dark:border-gray-700 md:mx-4 bg-abrandc-light-grey dark:bg-abrandc-dark-blackish"
                      >
                        <div className="p-6">
                          <h1 className="text-xl font-medium capitalize text-gray-700 dark:text-white lg:text-3xl">
                            {plan.name}
                          </h1>

                          <p className="mt-4 text-gray-500 dark:text-gray-300">
                            {plan.description}
                          </p>

                          <h2 className="mt-4 text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-4xl">
                            {plan.price}{" "}
                            <span className="text-base font-medium">
                              {plan.pricePeriod}
                            </span>
                          </h2>

                          <p className="mt-1 text-gray-500 dark:text-gray-300">
                            {plan.paymentTerm}
                          </p>

                          <button className="mt-6 w-full transform rounded-md bg-blue-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            {plan.buttonLabel}
                          </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        <div className="p-6">
                          <h1 className="text-lg font-medium capitalize text-gray-700 dark:text-white lg:text-xl">
                            What’s included:
                          </h1>

                          <div className="mt-8 space-y-4">
                            {plan.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center"
                              >
                                <feature.icon
                                  size={20}
                                  className={
                                    feature.icon === BiBlock
                                      ? "text-red-500"
                                      : "text-blue-500"
                                  }
                                />
                                <span className="mx-4 text-gray-700 dark:text-gray-300">
                                  {feature.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
      <FooterComponent />
    </>
  );
}
