'use client'
import { Kanit } from "next/font/google";

const kanit=Kanit({
  weight:'400',
  subsets:['latin']
})

import aletas_1 from "@/public/img/Products/products_img/Aletas/Aletas_seasub_dive_2.jpg"
import aletas_2 from "@/public/img/Products/products_img/Aletas/Aletas_seasub_predator_1.jpg"
import aletas_3 from "@/public/img/Products/products_img/Aletas/Aletas_seasub_predator_2.jpg"

import arpones_1 from "@/public/img/Products/products_img/Arpones/Cressi_1.jpg"
import arpones_2 from "@/public/img/Products/products_img/Arpones/Cressi_2.jpg"
import arpones_3 from "@/public/img/Products/products_img/Arpones/Elite_1.jpg"

import mascaras_1 from "@/public/img/Products/products_img/Mascaras/Mascara_seasub_click_1.jpg"
import mascaras_2 from "@/public/img/Products/products_img/Mascaras/Mascara_seasub_seal_1.jpg"
import mascaras_3 from "@/public/img/Products/products_img/Mascaras/Mascara_seasub_splenda_1.jpg"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import Image from "next/image"


export default function Carousel_Swiper(){

    return(<>
<div className={kanit.className}>
       <div className="flex flex-row relative pt-5 ml-20px mr-20px" style={{backgroundColor:"white"}} >
       <div className="  w-full relative " style={{width:"35%",height:"300px",marginLeft:"20px",marginTop:"20px",fontSize:"300%"}}><div className={kanit.className}>PRODUCTOS NUEVOS! <div className="rounded "  style={{backgroundColor:"red",width:"40%",height:"5px"}}></div></div></div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        navigation={true}

      >

        <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                        <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
    
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={aletas_1} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>ALETAS SEASUB DIVE</p> 
                                            
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>
            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                           <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
    
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={aletas_2} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                               <p>ALETAS SEASUB PREDATOR</p> 
                                            
    
                                                                
                                            </div>
                                            
                                            </div>
    
    
                                    </div>
            </SwiperSlide>
            
            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                    <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
                              
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={arpones_1} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>ARPON CRESSI 60</p>                                             
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>
            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                        <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
        
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={arpones_2} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>ARPON CRESSI</p>                                             
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>       
            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                        <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
    
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={arpones_3} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>ARPON DIVECOME ELITE</p>                                             
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                         <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
    
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={mascaras_1} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>MASCARA SEASUB CLICK</p>                                             
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>
            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                            <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
        
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={mascaras_2} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>ARPON DIVECOME SEAL</p>                                             
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>
            <SwiperSlide style={{background:"transparent"}}>
          <div  className="flex flex-col items-center justify-center p-4 transition ease-in-out delay-150  hover:-translate-y-2 duration-500 ..." >
                                        
                                       <div className="w-full max-w-sm bg-white  rounded-lg transition ease-in-out delay-150 duration-500 hover:cursor-pointer">
    
                                        <div className={`flex flex-col items-center pb-5 `}>
                                            <Image src={mascaras_3} alt="design" height={1000} width={1000} className="w-24 h-24 mt-4  mb-3 " />
                                            <p>ARPON DIVECOME SP´LENDA</p>                                             
    
                                                                
                                            </div>
                                            </div>
    
    
                                    </div>
            </SwiperSlide>      </Swiper>
      </div>
      </div></>
    )
}