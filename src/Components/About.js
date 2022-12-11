import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Courses from './Courses';
import Education from './Education';
import Skills from './Skills';

const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT');
    return (
        <div className='my-20' id='About'>
            <h2 className='font-semibold'>Who am I?</h2> 
            <h2 className='text-3xl font-bold'>About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6 items-center'>
            <div className="" data-aos="fade-right">
  
                
                    <button className='btn btn-primary w-full' onClick={()=>setAboutFilter('ABOUT')}>About</button>
                    
                    <button className='btn btn-primary w-full mt-3'  onClick={()=>setAboutFilter('EDUCATION')}>Education</button><br />
                    <button className='btn btn-primary w-full mt-3'  onClick={()=>setAboutFilter('SKILLS')}>Skill</button><br />
                    <button className='btn btn-primary w-full mt-3'  onClick={()=>setAboutFilter('COURSES')}>Courses</button>
                </div>
                <div className="col-span-2  align-middle"  data-aos="fade-left">
                    {
                        aboutFilter==='ABOUT' && <AboutMe></AboutMe>
                    }
                       {
                        aboutFilter==='EDUCATION' && <Education></Education>
                    }
                          {
                        aboutFilter==='SKILLS' && <Skills></Skills>
                    }
                           {
                        aboutFilter==='COURSES' && <Courses></Courses>
                }
                   
                   

                </div>
           </div>
        </div>
    );
};

export default About;