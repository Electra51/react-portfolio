import React from 'react';
import { HiAcademicCap } from 'react-icons/hi';
import { TbMinusVertical } from 'react-icons/tb';



const Education = () => {
  return (
      
    <div className="w-full rounded-lg bg-base-100 shadow-lg">
  
    
    <div className="flex justify-start text-xl font-medium mb-2 items-start gap-1 ">
        <div>
          <HiAcademicCap className='w-12' />
          <TbMinusVertical className='border-l-4 border-gray-200 ml-6 mt-1 py-12 space-y-12'/>
        </div>
        <div>
        <p className='text-start'>BSc. in Computer Science and Engineering(CSE) From Bangladesh Army University of Engineering and Technology.</p>
      <p className="text-base mt-2 text-left">
       2018-2022
        </p>
        <p className="text-base mb-2 text-left">
        GPA-3.59 (on a scale of 4.00)
      </p>
       </div>
      
      </div>
      <div className="flex justify-start text-xl font-medium mb-2 items-start gap-1 ">
        <div>
          <HiAcademicCap className='w-12' />
          <TbMinusVertical className='border-l-4 border-gray-200 ml-6 mt-1 py-8 space-y-12'/>
        </div>
        <div>
        <p className='text-start'>H.S.C From Govt. Shahid Bulbul College, Pabna.</p>
      <p className="text-base mt-2 text-left">
       2018-2022
        </p>
        <p className="text-base mb-2 text-left">
        GPA-4.92 (on a scale of 5.00)
      </p>
       </div>
      
      </div>
      <div className="flex justify-start text-xl font-medium mb-2 items-start gap-1 ">
        <div>
          <HiAcademicCap className='w-12' />
          <TbMinusVertical className='border-l-4 border-gray-200 ml-6 mt-1 py-8 space-y-12'/>
        </div>
        <div>
        <p className='text-start'>S.S.C From Pabna Govt. Girls High School Pabna.</p>
      <p className="text-base mt-2 text-left">
       2014
        </p>
        <p className="text-base mb-2 text-left">
        GPA-5.00 (on a scale of 5.00)
      </p>
       </div>
      
    </div>
 
</div>
    
    

    );
};

export default Education;