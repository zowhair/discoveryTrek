'use client'
import './style.css'

const arrimg = [
    {
        alt :"image",
         src:'/images/Rakaposhi.jpg' 
    },
    {
         src:'/images/Rakaposhi.jpg' ,
         alt:'image'

    },
    {
        src:'/images/Rakaposhi.jpg' ,
        alt : 'image'

    },
    {

        src:"/images/Rakaposhi.jpg" ,
        alt: 'image'
    },
    {
        src:'/images/Rakaposhi.jpg' ,
        alt: 'image'

    }
        ];



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Gallery({src}: any) {
  return (
    <>

            <div className= 'responsive gallery margin-bottom_top'>
                {/* <div className='flex-column'> */}
                    <p className="section-subtitle">Popular Packeges</p>

                    <h2 className="h2 section-title">Checkout Our Packeges</h2>

                    <p className="section-text">
                    We have many packages and deals and also support custom deals for you.
                    </p>
                    <div className='flex-row gap-3  margin-bottom_top'>
                    <Swiper
                        pagination={{
                            type: 'fraction',
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper"
                    >
                    {
                        arrimg.map ((item, index) => (
                            
                            <SwiperSlide key={index}>
                                <Image src={item.src} alt={item.alt} width={650} height={400} />
                            </SwiperSlide>

                        ))

                    }
                        
                    </Swiper>
                        <div className='flex-row image-div_gallery'>
                            <div className='image-gallery'>
                            {
                            arrimg.map ((item, index) => (
                                
                                <Image className='small-image_gallery' key={index} src={item.src} alt={item.alt} width={650} height={400}  />

                            ))

                        }

                        </div>
                        </div>
                    </div>

                {/* </div> */}
            </div>    
     
    </>
  );
}
