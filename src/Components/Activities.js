import React from 'react';
import { TbMinusVertical } from 'react-icons/tb';
import memberImg from '../Assets/images/membership.png'

const Activities = () => {
    return (
      <div className="w-full rounded-lg bg-base-100 shadow-lg p-2">
  
    
      <div className="flex justify-start text-xl font-medium mb-2 items-start gap-1 ">
          <div>
            <img src={memberImg} alt="" width={30}/>
            
            <TbMinusVertical className='border-l-4 border-gray-200 ml-3 mt-1 py-7 space-y-12'/>
          </div>
          <div>
            <p className='text-start'>General Member at IEEE Student Branch of Bangladesh Army University of Engineering & Technology (BAUET)</p>
        <p className="text-base mt-2 text-left">
         2022-present
            </p>
           
         
         </div>
        
        </div>
        <div className="flex justify-start text-xl font-medium mb-2 items-start gap-1 ">
          <div>
          <img src={memberImg} alt="" width={30}/>
            <TbMinusVertical className='border-l-4 border-gray-200 ml-3 mt-1 py-8 space-y-12'/>
          </div>
          <div>
          <p className='text-start'>General Member at Bangladesh Army University of Engineering & Technology (BAUET) Computer Society</p>
        <p className="text-base mt-2 text-left">
         2020-2021
          </p>
         
         </div>
        
        </div>
       
   
  </div>
    );
};

export default Activities;