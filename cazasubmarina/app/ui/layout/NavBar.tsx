"use client";
import Link from "next/link";
import icon from "@/public/img/logo.png";
import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit=Kanit({
  weight:'400',
  subsets:['latin']
})
import { useEffect, useState } from "react";

export default function Page() {

  const [showBurgerButtton, setShowBurgerButton] = useState(false);

  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900 w-full `}
      style={{ backgroundColor: "white", "boxShadow":" 0 -5px 10px -5px #333 "
    }}
      id="Home"
    >
      <div  className="max-w-screen-xl flex  items-center  mx-auto pt-5 pb-5"
      
      >
          <Link href={"/"}>
          <Image src={icon} width={120} height={120} alt="icon_image" />
        </Link> 
        <div className=" md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         
          <button
            data-collapse-toggle="navbar-cta"
            id="button_trigger"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            onClick={() => setShowBurgerButton(!showBurgerButtton)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center m-auto justify-between w-full md:flex md:w-auto md:order-1 ${
            showBurgerButtton ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul
            className="flex flex-col text-xl font-medium p-4 md:p-0 mt-4 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            style={{ backgroundColor: "#ffffff00" }}
          >
            <li className={kanit.className}>
              <Link
                href={"/Cursos"} 
                className="block py-2 px-3 md:p-0 text-black  rounded hover:bg-gray-100 hover:text-red md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                CURSOS
              </Link>
            </li>
            <li className={kanit.className}>
              <Link
                href={"/equipos"}
                className="block py-2 px-3 md:p-0 text-black rounded  hover:text-red hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                EQUIPOS
              </Link>
            </li>
            <li className={kanit.className}>
              <Link
                href={"/Galeria"}
                className="block py-2 px-3 md:p-0 text-black rounded  hover:text-red hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                GALERIA
              </Link>
            </li>
            <li className={kanit.className}>
              <Link
                href={"/Eventos"}
                className="block py-2 px-3 md:p-0 text-black rounded  hover:text-red hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                EVENTOS
              </Link>
            </li>
            <li className={kanit.className}>
              <Link
                href={"/Eventos"}
                className="block py-2 px-3 md:p-0 text-black rounded  hover:text-red hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                VIAJES
              </Link>
            </li>
            <li className={kanit.className}>
              <Link
                href={"/Nosotros"}
                className="block py-2 px-3 md:p-0 text-black rounded  hover:text-red hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                NOSOTROS
              </Link>
            </li>
          </ul>
          
        </div>
        <div className=" w-full md:flex md:w-auto md:order-1 p-2">
                  <Link 
                  href={"https://www.instagram.com/cazasubmarina.com.uy/"}
                  target="_blank"
                
                className="mb-2 inline-block rounded-full bg-[#c13584] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </Link>
          <Link
                href={"https://www.facebook.com/cazasubmarina.com.uy"}
                target="_blank"
                className="mb-2 ml-2 inline-block rounded-full bg-[#4267B2] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
              </svg>

            </span>
          </Link>

          <Link
          href={"https://api.whatsapp.com/send/?phone=59899606606&text&type=phone_number&app_absent=0"}
                target="_blank"
                className="mb-2 ml-2 inline-block rounded-full bg-[#25D366] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
            viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>


            </span>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
