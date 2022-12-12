import React from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import img1 from '../Assets/projectImage/1.png'
import img2 from '../Assets/projectImage/2.png'
import img3 from '../Assets/projectImage/3.PNG'
import img4 from '../Assets/projectImage/4.png'

const Projects = () => {
    
    return (
        <div className='my-36' id='Portfolio'>
          
          <h2 className='font-semibold'>My resent work</h2> 
            <h2 className='text-3xl font-bold'>Portfolio</h2> 
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-6' data-aos="zoom-in">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    PickFood

                    </h2>
                    <p className='text-start'>Pickfood is a review based Mern stack project made with MongoDB and...</p>
                    <div className="card-actions justify-end">

                        <Link to='/projectDetailOne' ><button className='btn btn-outline'>Details</button></Link>
                        <a href='https://pick-food-f91bb.web.app/' ><button className='btn btn-primary'>LiveSite</button></a>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    SE Learning

                    </h2>
                    <p className='text-start'>This is an e-learning website using react.js, node js and...</p>
                    <div className="card-actions justify-end">

                    <Link to='/projectDetailTwo' ><button className='btn btn-outline'>Details</button></Link>
                        <a href='https://learning-site-a4e19.web.app/' ><button className='btn btn-primary'>LiveSite</button></a>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    IceBox

                    </h2>
                    <p className='text-start'>IceBox is a  previous product-selling website, complete with full functionality with mong...</p>
                    <div className="card-actions justify-end">

                    <Link to='/projectDetailThree'><button className='btn btn-outline'>Details</button></Link>
                        <a href='https://icebox-5795c.web.app/' ><button className='btn btn-primary'>LiveSite</button></a>
                    </div>
                </div>
                </div>
                
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    QuiZone

                    </h2>
                    <p className='text-start'>This is an Online quiz system based on react js and tailwind and also responsive client...</p>
                    <div className="card-actions justify-end">

                    <Link to='/projectDetailFour'><button className='btn btn-outline'>Details</button></Link>
                        <a href='https://splendorous-brigadeiros-d5f70e.netlify.app/' ><button className='btn btn-primary'>LiveSite</button></a>
                    </div>
                </div>
            </div>
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