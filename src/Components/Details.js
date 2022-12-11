import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle } from 'react-icons/ai';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Details.css";


import { EffectCoverflow, Pagination } from "swiper";

const Details = () => {
    const loaderData= useLoaderData()
    console.log(loaderData);
    const {img1,img2,img3,project_name,first,second,third,forth,fifth,s01,s02,s03,s04,s05,s06,s07,s08,server,client,live} = loaderData;
    
    
    return (
        <div className=''>
            <div className='text-start mt-10'>
            <p className='text-2xl font-bold my-5'>Project Name: {project_name}</p>
            <a href={client}><button className='btn btn-outline'>Github(Client)</button></a>
            <a href={server}><button className='btn btn-outline mx-3'>Github(Server)</button></a>
           <a href={live}> <button className='btn '>Live Site</button></a>
            </div>
            
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt=""/>
        </SwiperSlide>
        
      </Swiper>
                
             

            <p className='text-2xl font-bold my-5'>Project Details:</p>
            <div className='grid grid-cols-3 gap-4'>
                <div class="col-span-2">
                    <p className='text-start font-bold'>Feature</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>{first}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>{second}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'> {third}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'> {forth}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'> {fifth}</span></li>
                    </ol>
                    
    
                </div>
                <div class="...">
                <p className='text-start font-bold'>Technology</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>{s01}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>{s02}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'> {s03}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'> {s04}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle /><span className='ml-2'> {s05}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>{s06}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>{s07}</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'> {s08}</span></li>
                        
                    </ol>
                    
                </div>
            </div>



            
        </div>
    );
};

export default Details;