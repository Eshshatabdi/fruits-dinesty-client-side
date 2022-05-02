import React from 'react';
import banner from '../../../images/banner.avif'

const Banner = () => {
    return (
        <div>
            <img className='w-100' style={{ height: '400px' }} src={banner} alt="" />

        </div>
    );
};

export default Banner;