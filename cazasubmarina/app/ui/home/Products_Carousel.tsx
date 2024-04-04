'use client'
import Image from "next/image";
import { RevealWrapper } from  'next-reveal'

import aletas_1 from "@/public/img/Products/products_img/Aletas/Aletas_seasub_dive_2.jpg"
import aletas_2 from "@/public/img/Products/products_img/Aletas/Aletas_seasub_predator_1.jpg"
import aletas_3 from "@/public/img/Products/products_img/Aletas/Aletas_seasub_predator_1.jpg"

import arpones_1 from "@/public/img/Products/products_img/Arpones/Cressi_1.jpg"
import arpones_2 from "@/public/img/Products/products_img/Arpones/Cressi_2.jpg"
import arpones_3 from "@/public/img/Products/products_img/Arpones/Elite_1.jpg"

import mascaras_1 from "@/public/img/Products/products_img/Mascaras/Mascara_seasub_click_1.jpg"
import mascaras_2 from "@/public/img/Products/products_img/Mascaras/Mascara_seasub_seal_1.jpg"
import mascaras_3 from "@/public/img/Products/products_img/Mascaras/Mascara_seasub_splenda_1.jpg"

export default function Products_Carousel(){


    return(
        <div id="default-carousel_1" className="relative w-auto"   data-carousel="static">
            <div className="relative  overflow-hidden "style={{height:"400px"}}>
                
                
                <div className=" duration-700 ease-in-out h-fit" data-carousel-item>
                                                <div id="cards" className="px-4 md:px-60 text-center ">

                                <h2 className="text-3xl md:text-4xl lg:text-5xl text-landingColor font-bold tracking-tighter text-[#001220]">PRODUCTOS </h2>

                                <p className="mt-4 text-lg md:text-xl lg:text-2xl  text-gray-500 dark:text-gray-400">
                                
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <RevealWrapper  delay={400} origin="bottom"   reset>

                                    <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className={`flex flex-col items-center pb-10 `}>
                                        <Image src={aletas_1} alt="design" height={80} width={80} className="w-24 h-24 mt-4  mb-3 " />
                                        <h3 className="text-2xl font-bold text-[#001220]">Seasub Dive</h3>
                                            
                                            <p className="mt-2 text-gray-500 dark:text-gray-400  ml-4 mr-4">              We offer a range of services to meet your needs.
                                            </p>

                                                            
                                        </div>
                                        </div>


                                </div>
                                </RevealWrapper>

                                <RevealWrapper  delay={700} origin="bottom"   reset>
                                <div className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ...">
                                    <div className="flex flex-col items-center justify-center p-4">
                                    
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className="flex flex-col items-center pb-10">
                                    <Image src={aletas_2} alt="design" height={80} width={80} className="w-24 h-24 mt-4 ml-5 mb-3 " />
                                        <h3 className="text-2xl font-bold text-[#001220]">Development</h3>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 ml-4 mr-4">We develop websites with the latest technologies.</p>

                                                
                                    </div>
                                </div>
                                </div>
                                </div>
                                    </RevealWrapper>
                                    <RevealWrapper delay={1000} origin="bottom"   reset>

                                    <div className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className="flex flex-col items-center pb-10">
                                    <Image src={aletas_3} alt="design" height={80} width={80} className="w-24 h-24 mt-4  mb-3" />
                                        <h3 className="text-2xl font-bold text-[#001220]">Maintenance</h3>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 ml-4 mr-4">We provide ongoing maintenance and support.</p>

                                                 
                                    </div>
                                </div>
                                    </div>
                                </RevealWrapper>
                                </div>
                                </div>


                    {/*<div className="relative  w-full sm:block hidden h-fit " >   
                        <Image alt="fondo_image" className=" z-0 absolute sm:block hidden  "  height={1080} width={1920} src={carrousel_Image_1}/>
                        <div className="relative  ">
                            <Image alt="fondo_image" className=" sm:block hidden absolute top-0 right-0 bottom-10 opacity-75"   height={3000} width={497} src={carrousel_Image_1_0}/>
                        </div>

                    </div> */}           
                </div>


                <div className=" duration-700 ease-in-out h-fit" data-carousel-item>
                                                <div id="cards" className="px-4 md:px-60 text-center ">

                                <h2 className="text-3xl md:text-4xl lg:text-5xl text-landingColor font-bold tracking-tighter text-[#001220]">Our Services</h2>

                                <p className="mt-4 text-lg md:text-xl lg:text-2xl  text-gray-500 dark:text-gray-400">
                                
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <RevealWrapper  delay={400} origin="bottom"   reset>

                                    <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className={`flex flex-col items-center pb-10 `}>
                                        <Image src={arpones_1} alt="design" height={80} width={80} className="w-24 h-24 mt-4  mb-3 " />
                                        <h3 className="text-2xl font-bold text-[#001220]">Website Design</h3>
                                            
                                            <p className="mt-2 text-gray-500 dark:text-gray-400  ml-4 mr-4">              We offer a range of services to meet your needs.
                                            </p>

                                                            
                                        </div>
                                        </div>


                                </div>
                                </RevealWrapper>

                                <RevealWrapper  delay={700} origin="bottom"   reset>
                                <div className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ...">
                                    <div className="flex flex-col items-center justify-center p-4">
                                    
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className="flex flex-col items-center pb-10">
                                    <Image src={arpones_2} alt="design" height={80} width={80} className="w-24 h-24 mt-4 ml-5 mb-3 " />
                                        <h3 className="text-2xl font-bold text-[#001220]">Development</h3>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 ml-4 mr-4">We develop websites with the latest technologies.</p>

                                                
                                    </div>
                                </div>
                                </div>
                                </div>
                                    </RevealWrapper>
                                    <RevealWrapper delay={1000} origin="bottom"   reset>

                                    <div className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className="flex flex-col items-center pb-10">
                                    <Image src={arpones_3} alt="design" height={80} width={80} className="w-24 h-24 mt-4  mb-3" />
                                        <h3 className="text-2xl font-bold text-[#001220]">Maintenance</h3>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 ml-4 mr-4">We provide ongoing maintenance and support.</p>

                                                
                                    </div>
                                </div>
                                    </div>
                                </RevealWrapper>
                                </div>
                                </div>


                    {/*<div className="relative  w-full sm:block hidden h-fit " >   
                        <Image alt="fondo_image" className=" z-0 absolute sm:block hidden  "  height={1080} width={1920} src={carrousel_Image_1}/>
                        <div className="relative  ">
                            <Image alt="fondo_image" className=" sm:block hidden absolute top-0 right-0 bottom-10 opacity-75"   height={3000} width={497} src={carrousel_Image_1_0}/>
                        </div>

                    </div> */}             
                </div>


                


                <div className=" duration-700 ease-in-out h-fit" data-carousel-item>
                                                <div id="cards" className="px-4 md:px-60 text-center ">

                                <h2 className="text-3xl md:text-4xl lg:text-5xl text-landingColor font-bold tracking-tighter text-[#001220]">Our Services</h2>

                                <p className="mt-4 text-lg md:text-xl lg:text-2xl  text-gray-500 dark:text-gray-400">
                                
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <RevealWrapper  delay={400} origin="bottom"   reset>

                                    <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className={`flex flex-col items-center pb-10 `}>
                                        <Image src={mascaras_1} alt="design" height={80} width={80} className="w-24 h-24 mt-4  mb-3 " />
                                        <h3 className="text-2xl font-bold text-[#001220]">Website Design</h3>
                                            
                                            <p className="mt-2 text-gray-500 dark:text-gray-400  ml-4 mr-4">              We offer a range of services to meet your needs.
                                            </p>

                                                            
                                        </div>
                                        </div>


                                </div>
                                </RevealWrapper>

                                <RevealWrapper  delay={700} origin="bottom"   reset>
                                <div className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ...">
                                    <div className="flex flex-col items-center justify-center p-4">
                                    
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className="flex flex-col items-center pb-10">
                                    <Image src={mascaras_2} alt="design" height={80} width={80} className="w-24 h-24 mt-4 ml-5 mb-3 " />
                                        <h3 className="text-2xl font-bold text-[#001220]">Development</h3>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 ml-4 mr-4">We develop websites with the latest technologies.</p>

                                                
                                    </div>
                                </div>
                                </div>
                                </div>
                                    </RevealWrapper>
                                    <RevealWrapper delay={1000} origin="bottom"   reset>

                                    <div className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 duration-500 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">

                                    <div className="flex flex-col items-center pb-10">
                                    <Image src={mascaras_3} alt="design" height={80} width={80} className="w-24 h-24 mt-4  mb-3" />
                                        <h3 className="text-2xl font-bold text-[#001220]">Maintenance</h3>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 ml-4 mr-4">We provide ongoing maintenance and support.</p>

                                                
                                    </div>
                                </div>
                                    </div>
                                </RevealWrapper>
                                </div>
                                </div>


                    {/*<div className="relative  w-full sm:block hidden h-fit " >   
                        <Image alt="fondo_image" className=" z-0 absolute sm:block hidden  "  height={1080} width={1920} src={carrousel_Image_1}/>
                        <div className="relative  ">
                            <Image alt="fondo_image" className=" sm:block hidden absolute top-0 right-0 bottom-10 opacity-75"   height={3000} width={497} src={carrousel_Image_1_0}/>
                        </div>

                    </div> */}           
                </div>
                
                
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>

            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>


    </div>
  

    )
}