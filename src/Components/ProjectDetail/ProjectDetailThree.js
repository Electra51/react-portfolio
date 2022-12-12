import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle, AiFillGithub, AiFillDribbbleCircle } from 'react-icons/ai';
import iceBoxImg1 from '../../Assets/projectImage/project3Image/iceboxadmin.png'
import iceBoxImg2 from '../../Assets/projectImage/project3Image/iceboxblog.png'
import iceBoxImg3 from '../../Assets/projectImage/project3Image/iceboxseller.png'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Details.css";


import { EffectCoverflow, Pagination } from "swiper";

const ProjectDetailThree = () => {
    return (
        <div className='mt-20'>
            <div className='text-start mt-10'>
            <p className='text-2xl font-bold my-5'>Project Name: IceBox</p>
          <a href='https://github.com/Electra51/icebox-client'><button className='btn btn-outline'><AiFillGithub></AiFillGithub>Client</button></a>
            <a href='https://github.com/Electra51/icebox-server'><button className='btn btn-outline mx-3'><AiFillGithub/>Server</button></a>
           <a href='https://icebox-5795c.web.app/'> <button className='btn '><AiFillDribbbleCircle></AiFillDribbbleCircle>Live Site</button></a>
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
        <img src={iceBoxImg1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iceBoxImg2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iceBoxImg3} alt=""/>
        </SwiperSlide>
        
      </Swiper>
                
             

            <p className='text-2xl font-bold my-5'>Project Details:</p>
            <div className='grid grid-cols-3 gap-4'>
                <div class="col-span-2">
                    <p className='text-start font-bold'>Feature</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>IceBox is and old product selling website based on mongodb and react js.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>There are 3 type of user here such as buyer,seller and admin.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Admin manage all buyer and seller,he remove and verify any seller easily.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Buyer buy something and also report to admin for a product,after buying product he see the order list on his dashboard.Buyer pay using stripe payment system.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Seller add product,advertise his product and also delete this.</span></li>
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

export default ProjectDetailThree;