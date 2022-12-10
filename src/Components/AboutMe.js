import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import img from '../Assets/images/about.png'
const AboutMe = () => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-col gap-3 items-center '>
        <img src={img} alt="" width={210} />
        <div>
        <p className='text-start'>I'm Safayet Nur. I am an energetic, confident and enthusiastic young person who has developed a mature and responsible approach to any task that I undertake. I'm a Hard-working web developer with a flair for creating elegant solutions in the least amount of time and also can solve a problem efficiently. I eagerly want to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment.</p>
        <div className='flex flex-row lg:flex gap-5 mt-5 '>
        <FaFacebook></FaFacebook>
        <FaLinkedin></FaLinkedin>
        <FaWhatsapp></FaWhatsapp>
        <FaGithub></FaGithub>
    </div>
        </div>
    
    
    </div>
    );
};

export default AboutMe;