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
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>


    </div>
  
        )
}