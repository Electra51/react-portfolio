import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
const Blogs = () => {
    return (
        <div className='text-center'>
          <ClipLoader className='mr-2'
        color={'#225566'}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
                    /> Coming soon... 
        </div>
    );
};

export default Blogs;