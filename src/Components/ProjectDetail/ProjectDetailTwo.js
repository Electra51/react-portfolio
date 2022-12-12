import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle, AiFillGithub, AiFillDribbbleCircle } from 'react-icons/ai';
import learningImg1 from '../../Assets/projectImage/project2Image/learning1.png'
import learningImg2 from '../../Assets/projectImage/project2Image/learning2.png'
import learningImg3 from '../../Assets/projectImage/project2Image/learning3.png'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Details.css";


import { EffectCoverflow, Pagination } from "swiper";

const ProjectDetailTwo = () => {
    return (
        <div className='mt-20'>
            <div className='text-start mt-10'>
            <p className='text-2xl font-bold my-5'>Project Name: IceBox</p>
          <a href='https://github.com/Electra51/learning-site'><button className='btn btn-outline'><AiFillGithub></AiFillGithub>Client</button></a>
            <a href='https://github.com/Electra51/learning-site-server'><button className='btn btn-outline mx-3'><AiFillGithub/>Server</button></a>
           <a href='https://learning-site-a4e19.web.app/'> <button className='btn '><AiFillDribbbleCircle></AiFillDribbbleCircle>Live Site</button></a>
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
        <img src={learningImg1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={learningImg2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={learningImg3} alt=""/>
        </SwiperSlide>
        
      </Swiper>
                
             

            <p className='text-2xl font-bold my-5'>Project Details:</p>
            <div className='grid grid-cols-3 gap-4'>
                <div class="col-span-2">
                    <p className='text-start font-bold'>Feature</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>SE Learning is an online courses website like coursera,udemy.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>User visit website and take any courses. </span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>User see the lecture duration,total lecture and so on.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Also download any courses.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Only registered user get premium access here.</span></li>
                    </ol>
                    
    
                </div>
                <div class="...">
                <p className='text-start font-bold'>Technology</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>"React js","React router dom","React hot toast","Node js","Express.js","Mongodb","CRUD operation","JWT, payment stripe","DaisyUI"</span></li>
                       
                        
                    </ol>
                    
                </div>
            </div>



            
        </div>
    );
};

export default ProjectDetailTwo;
