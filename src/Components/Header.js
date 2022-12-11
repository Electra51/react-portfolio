import React from 'react';
import img from '../Assets/images/Safayet_Nur.png'
import { Typewriter } from 'react-simple-typewriter'

import cv from '../Assets/images/Safayet_Nur_Resume.pdf'

const Header = () => {
    
    return (
        <div className='text-center'>
            <h2 className='font-semibold'>Hello I'm</h2> 
            
            <h2 className='text-3xl font-bold'>Safayet Nur</h2>
            <h2 className='text-xl '><span>
         
          <Typewriter
            words={['Mern Stack Developer', 'Web Designer & Developer', 'Frontend Developer']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span></h2> 
            <br />
            <div className='flex gap-4 justify-center'>
                
                <a href=""><button className='btn btn-outline'>Let's Start</button></a>
                <a href={cv} download><button className='btn btn-primary'>Download Resume</button></a>
            </div>
            <br />
            <img className='mx-auto' src={img} alt="" width={300}/>
            
       
           
        </div>
    );
};

export default Header;