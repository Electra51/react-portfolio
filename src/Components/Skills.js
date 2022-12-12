import React from 'react';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { FaBootstrap, FaCss3Alt, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMaterialui, SiMongodb, SiNetlify, SiTailwindcss, SiTypescript, SiVisualstudio } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { TbApi } from 'react-icons/tb';


const Skills = () => {
    return (
        <div className='mt-36'>
           <h2 className='font-semibold'>Skills I have</h2> 
            <h2 className='text-3xl font-bold'>My Skills</h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 text-xl'>
            <div className=' border border-neutral rounded-md '>
                    <p className='text-2xl my-8'>Front-End Web Technology</p>
                    <hr className=' border border-neutral'/>
            <div className="flex justify-between p-3">
                    <div>
                        <div className='flex items-center gap-1'>
                        <AiFillHtml5 />
                       <p> HTML</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <FaCss3Alt />
                       <p> CSS</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <FaBootstrap />
                       <p>Bootstrap</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiTailwindcss />
                       <p>Tailwindcss</p>
                            </div>
                            <div className='flex items-center gap-1'>
                        <FaFigma />
                       <p>Figma</p>
                       </div>
                       
                     
                    </div>
                    <div>
                    <div className='flex items-center gap-1'>
                        <DiJavascript />
                       <p>Javascript</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <FaReact/>
                       <p>React JS</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiMaterialui />
                       <p>Materialui</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiTypescript />
                       <p>Typescript</p>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
                <div className=' border border-neutral rounded-md'>
                    <p className='text-2xl my-8'>Tools & Backend Web Technology</p>
                    <hr className=' border border-neutral'/>

            <div className="flex justify-between p-3">
                    <div>
                        <div className='flex items-center gap-1'>
                        <AiFillGithub />
                       <p>Github</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiVisualstudio />
                       <p>Visual studio code</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiNetlify />
                       <p>Netlify</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <TbApi />
                       <p>Rest API</p>
                            </div>
                         
                       
                     
                    </div>
                        <div>
                        <div className='flex items-center gap-1'>
                        <FaNodeJs />
                       <p>NodeJs</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiExpress/>
                       <p>Express</p>
                        </div>
                    
                        <div className='flex items-center gap-1'>
                        <SiMongodb />
                       <p>Mongodb</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <SiFirebase/>
                       <p>Firebase</p>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Skills;