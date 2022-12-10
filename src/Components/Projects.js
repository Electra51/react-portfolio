import React from 'react';
import { SyncLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";
const Projects = () => {
    const projectInfo = [
        {
            id:'1',
            project_name: 'PickFood',
            describe:'Pickfood is a review based Mern stack project made with MongoDB and...',
            img: 'https://i.ibb.co/gWPdFjN/22.png',
            server: 'https://github.com/Electra51/pick-food-server',
            client: 'https://github.com/Electra51/pick-food',
            live:'https://pick-food-f91bb.web.app/'
        },
        {
            id:'2',
            project_name: 'QuiZone',
            describe:'This is an Online quiz system based on react js and tailwind and also responsive client...',
            img: 'https://i.ibb.co/SXBmH9X/Capture.png',
            client: 'https://github.com/Electra51/react-quizone',
            live:'https://splendorous-brigadeiros-d5f70e.netlify.app/'
        },
            {
                id:'3',
                project_name: 'IceBox',
                describe:'IceBox is a  previous product-selling website, complete with full functionality with mong...',
                img: 'https://i.ibb.co/2K7Tfgz/44.png',
                server: 'https://github.com/Electra51/icebox-server',
            client: 'https://github.com/Electra51/icebox-client',
            live:'https://icebox-5795c.web.app/'
                
        },
      
        {
            id:'4',
            project_name: 'GYM-Club',
            describe:'This is an GYM item selecting site using react.js It allows users to add...',
            img: 'https://i.ibb.co/R7F17CV/Capture.png',
            client: 'https://github.com/Electra51/gym-club',
            live:'https://phenomenal-melomakarona-85e196.netlify.app/'
        }
       
    ]
    return (
        <div className='my-20'>
          
          <h2 className='font-semibold'>My resent work</h2> 
            <h2 className='text-3xl font-bold'>Portfolio</h2> 
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-6' data-aos="zoom-in">
                {
                    projectInfo.map(info =>
                        <div key={info.id} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={info.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {info.project_name}
      
    </h2>
    <p className='text-start'>{info.describe}</p>
                                <div className="card-actions justify-end">
                                <a href={info.client}><button className='btn btn-outline'>Client</button></a> 
      <a href={info.server}><button className='btn btn-outline'>Server</button></a> 
      <a href={info.live}><button className='btn btn-primary'>LiveSite</button></a>
    </div>
  </div>
</div>)
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