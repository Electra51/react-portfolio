import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ info }) => {
    console.log(info);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={info.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {info.project_name}

                    </h2>
                    <p className='text-start'>{info.describe}</p>
                    <div className="card-actions justify-end">

                        <Link to={`/project/${info.id}`}><button className='btn btn-outline'>Details</button></Link>
                        <a href={info.live}><button className='btn btn-primary'>LiveSite</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;