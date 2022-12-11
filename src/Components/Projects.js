import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import ProjectCard from './ProjectCard';
const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
       .then(data=>setProjectInfo(data)) 
    },[])
    return (
        <div className='my-36' id='Portfolio'>
          
          <h2 className='font-semibold'>My resent work</h2> 
            <h2 className='text-3xl font-bold'>Portfolio</h2> 
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-6' data-aos="zoom-in">
                {
                    projectInfo.map(info =>
                        <ProjectCard key={info.id}
                        info={info}></ProjectCard>)
                }
                <p className='flex justify-start align-baseline items-end'>
                <ClipLoader className='mr-2'
        color={'#225566'}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
                    />
                    Coming soon...
</p>
            </div>
           
        </div>
    );
};

export default Projects;