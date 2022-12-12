import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle, AiFillGithub, AiFillDribbbleCircle } from 'react-icons/ai';
import pickImg1 from '../../Assets/projectImage/project1Image/pickfood1.png'
import pickImg2 from '../../Assets/projectImage/project1Image/pickfood2.png'
import pickImg3 from '../../Assets/projectImage/project1Image/pickfood3.png'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../Components/Details.css";


import { EffectCoverflow, Pagination } from "swiper";


    

    const ProjectDetailOne = () => {
        
    return (
        <div className='mt-20'>
            <div className='text-start mt-10'>
            <p className='text-2xl font-bold my-5'>Project Name: PickFood</p>
            <a href='https://github.com/Electra51/pick-food'><button className='btn btn-outline'><AiFillGithub></AiFillGithub>Client</button></a>
            <a href='https://github.com/Electra51/pick-food-server'><button className='btn btn-outline mx-3'><AiFillGithub/>Server</button></a>
           <a href='https://pick-food-f91bb.web.app/'> <button className='btn '><AiFillDribbbleCircle></AiFillDribbbleCircle>Live Site</button></a>
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
        <img src={pickImg1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pickImg2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pickImg3} alt=""/>
        </SwiperSlide>
        
      </Swiper>
                
             

            <p className='text-2xl font-bold my-5'>Project Details:</p>
            <div className='grid grid-cols-3 gap-4'>
                <div class="col-span-2">
                    <p className='text-start font-bold'>Feature</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>PickFood is a Mern stack review project made with MongoDB and ReactJs.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Any user can visit the website, but they cannot visit all routes.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Only registered users can visit all routes and use all features of this website.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Registered user add review for food,also add product,delete and update his product review.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Client side and server side also available here.</span></li>
                    </ol>
                    
    
                </div>
                <div class="...">
                <p className='text-start font-bold'>Technology</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>"React js","React router dom","React hot toast","Node js","Express.js","Mongodb","CRUD operation","DaisyUI"</span></li>
                       
                        
                    </ol>
                    
                </div>
            </div>



            
        </div>
    );
};

export default ProjectDetailOne;