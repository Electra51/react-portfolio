import React from 'react';
import { MdStars } from 'react-icons/md';
import { TbMinusVertical } from 'react-icons/tb';

const Courses = () => {
    return (
        <div className="w-full rounded-lg bg-base-100 shadow-lg">
   
    
          <div className="flex justify-start  text-xl font-medium mb-2 items-start gap-1 ">
            <div>
              <MdStars className='w-12' />
              <TbMinusVertical className='border-l-4 border-gray-200 ml-6 mt-1 py-6 space-y-12'/>
            </div>
            <div>
            <p className='text-start'>Certificate of professional UI/UX design Course From Eshikhon</p>
          <p className=" text-base mt-2 text-left">
          2022
            </p>
           
           </div>
          
          </div>
          <div className="flex justify-start  text-xl font-medium mb-2 items-start gap-1 ">
          <div>
          <MdStars className='w-12' />
            <TbMinusVertical className='border-l-4 border-gray-200 ml-6 mt-1 py-7 space-y-12'/>
          </div>
          <div>
          <p className='text-start'>Hult Prize On Campus Idea Contest at Bangladesh Army University of Engineering & Technology (BAUET)</p>
        <p className=" text-base mt-2 text-left">
         2020
          </p>
         </div>
        
      </div>
     
    </div>
    );
};

export default Courses;