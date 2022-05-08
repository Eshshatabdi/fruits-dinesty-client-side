import React from 'react';
import image404 from '../../images/found img.avif'

const PageNotFound = () => {
    return (
        <div className='container'>
            <h3 className='text-primary text-center'>404</h3>
            <h3 className='text-primary text-center'>The page you are looking for is not found....</h3>


            <img style={{ height: '400px' }} className='w-100' src={image404} alt="" />



        </div>
    );
};

export default PageNotFound;