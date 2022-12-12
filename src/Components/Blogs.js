import React from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
const Blogs = () => {
    return (
        <div className='text-center mt-20'>
          <ClipLoader className='mr-2'
        color={'#225566'}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        /> Coming soon... 
        

        <div>
        <Link to='/'><button className='mt-10 btn btn-outline'>Go Back Home</button></Link>
        </div>
        </div>
    );
};

export default Blogs;