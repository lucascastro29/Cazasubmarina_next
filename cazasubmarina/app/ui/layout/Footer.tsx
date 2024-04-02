"use client";

import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <footer className="bg-white dark:bg-gray-900" style={{ backgroundColor: "#001220" }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className=" flex mb-6 md:mb-0">
            <Link href={"/home"} id="Home">
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 ">
            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <Link href="#About" className=" hover:underline">
                  About
                </Link>
              </ul>
            </div>

            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link href="#Services" className="hover:underline">
                  Services
                </Link>
              </ul>
            </div>
            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <Link href="#Portfolio" className=" hover:underline">
                  Portfolio
                </Link>
              </ul>
            </div>
            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link href="#Contact" className="hover:underline">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/home" className="hover:underline">
              Websuy™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            
            <Link href="https://www.instagram.com/websuy.com.uy/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
            ><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
