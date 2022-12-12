import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle, AiFillGithub, AiFillDribbbleCircle } from 'react-icons/ai';
import quizoneImg1 from '../../Assets/projectImage/project4Image/quizone1.png'
import quizoneImg2 from '../../Assets/projectImage/project4Image/quizone2.png'
import quizoneImg3 from '../../Assets/projectImage/project4Image/quizone3.png'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Details.css";


import { EffectCoverflow, Pagination } from "swiper";


    

    const ProjectDetailFour = () => {
        
    return (
        <div className='mt-20'>
            <div className='text-start mt-10'>
            <p className='text-2xl font-bold my-5'>Project Name: PickFood</p>
            <a href='https://github.com/Electra51/react-quizone'><button className='btn btn-outline'><AiFillGithub></AiFillGithub>Client</button></a>
            
           <a href='https://splendorous-brigadeiros-d5f70e.netlify.app/'> <button className='btn '><AiFillDribbbleCircle></AiFillDribbbleCircle>Live Site</button></a>
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
        <img src={quizoneImg1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={quizoneImg2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={quizoneImg3} alt=""/>
        </SwiperSlide>
        
      </Swiper>
                
             

            <p className='text-2xl font-bold my-5'>Project Details:</p>
            <div className='grid grid-cols-3 gap-4'>
                <div class="col-span-2">
                    <p className='text-start font-bold'>Feature</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>QuiZone is react based online quiz test web application.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Any user visit this website and participate any quiz test.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>User can see the right answer after giving quiz test.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Here a blog section is available and user can read blogs.</span></li>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>Here use react rechart for showing all subject and question ratio.</span></li>
                    </ol>
                    
    
                </div>
                <div class="...">
                <p className='text-start font-bold'>Technology</p>
                    <ol className='text-start'>
                        <li className='flex items-center align-middle'><AiFillCheckCircle/><span className='ml-2'>"React js","React router dom","React toastify","TailwindCss","Rest API","react-chart"</span></li>
                       
                        
                    </ol>
                    
                </div>
            </div>



            
        </div>
    );
};

export default ProjectDetailFour;