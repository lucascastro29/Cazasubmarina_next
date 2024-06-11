"use client";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/img/logo.png";
import { Kanit } from "next/font/google";
import { useEffect, useState } from "react";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

export default function Page() {
  const [showBurgerButton, setShowBurgerButton] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sectionBelowLanding = document.getElementById("below-landing");
      if (sectionBelowLanding) {
        const sectionTop = sectionBelowLanding.getBoundingClientRect().top;
        if (sectionTop <= 0) {
      console.log(sectionTop)

          setNavbarVisible(true);
        } else {

          setNavbarVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-2 right-0 transition-transform duration-300 ${
          navbarVisible ? "translate-y-0" : "translate-y-full"
        } bg-white border-gray-200 dark:bg-gray-900 w-full shadow-lg`}
        style={{ backgroundColor: "white" }}
        id="Home"
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2 px-4" >
          <Link href={"/"}>
            <Image src={icon} width={50} height={50} alt="icon_image" />
          </Link>
          <div className="flex items-center md:hidden">
            <button
              data-collapse-toggle="navbar-cta"
              id="button_trigger"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              onClick={() => setShowBurgerButton(!showBurgerButton)}
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
            className={`items-center justify-between w-full md:flex md:w-auto ${
              showBurgerButton ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul
              className="flex flex-col text-sm md:text-base font-medium mt-4 md:mt-0 md:flex-row md:space-x-4"
              style={{ backgroundColor: "#ffffff00" }}
            >
              {["Cursos", "Equipos", "Galeria", "Eventos", "Viajes", "Nosotros"].map(
                (item, index) => (
                  <li key={index} className={kanit.className}>
                    <Link
                      href={`/${item}`}
                      className="block py-2 px-3 text-black rounded hover:bg-gray-100 hover:text-red-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="hidden md:flex space-x-2">
            <Link
              href="https://www.instagram.com/cazasubmarina.com.uy/"
              target="_blank"
              className="inline-block rounded-full bg-[#c13584] p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="h-5 w-5"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/cazasubmarina.com.uy"
              target="_blank"
              className="inline-block rounded-full bg-[#4267B2] p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
                className="h-5 w-5"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=59899606606&text&type=phone_number&app_absent=0"
              target="_blank"
              className="inline-block rounded-full bg-[#25D366] p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="h-5 w-5"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4L54 427L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7 .9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </Link>
          </div>
          </div>
      </nav>
    </>

      )
    }