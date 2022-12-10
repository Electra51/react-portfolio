import React from 'react';
import img from '../Assets/images/Safayet_Nur.png'


const Header = () => {
    
    return (
        <div className='text-center'>
            <h2 className='font-semibold'>Hello I'm</h2> 
            
            <h2 className='text-3xl font-bold'>Safayet Nur</h2>
            <h2 className='text-xl font-semibold'>Frontend Developer</h2> 
            <br />
            <div className='flex gap-4 justify-center'>
                
                <button className='btn btn-outline'>Let's Start</button>
                <button className='btn'>Download Resume</button>
            </div>
            <br />
            <img className='mx-auto' src={img} alt="" width={300}/>
            
       
           
        </div>
    );
};

export default Header;