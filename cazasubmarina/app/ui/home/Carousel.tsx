import carrousel_Image_1 from "@/public/img/carrousel_home/1.jpg"
import carrousel_Image_1_0 from "@/public/img/carrousel_home/2.jpg"

import Image from "next/image"

export default function carousel(){

    return(
        <div id="default-carousel" className="relative w-auto"  data-carousel="slide">
        <div className="relative  overflow-hidden "style={{height:"785px"}}>
            
            
            <div className=" duration-700 ease-in-out h-fit" data-carousel-item>
            <div className="relative  w-full sm:block hidden h-fit " >   
   <Image alt="fondo_image" className=" z-0 absolute sm:block hidden  "  height={1080} width={1920} src={carrousel_Image_1}/>
                <div className="relative  ">
                    <Image alt="fondo_image" className=" sm:block hidden absolute top-0 right-0 bottom-10 opacity-75"   height={3000} width={497} src={carrousel_Image_1_0}/>
                </div>

</div>            </div>
            <div className=" duration-700 ease-in-out" data-carousel-item>
    <Image alt="fondo_image" className="sm:block hidden  "  src={carrousel_Image_1}/>
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
    <Image alt="fondo_image" className="sm:block hidden  "   height={1080} width={1920} src={carrousel_Image_1}/>
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
    <Image alt="fondo_image" className="sm:block hidden "   height={1080} width={1920} src={carrousel_Image_1}/>
            </div>
            
           

        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
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