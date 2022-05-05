import React from 'react';
import banner1 from '../../../images/banner1.webp'
const Banner = () => {

    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className="col-md-6  mt-5 ">
                    <h2 className='text-success'>Fruits Dynasty</h2>
                    <p>It is one of the best source of healthy fruits.Where you can get your desire fruits and never worry about your health. </p>

                </div>
                <div className="col-md-6">
                    <img className='w-100' src={banner1} alt="" />
                </div>
            </div>



        </div>
    );
};

export default Banner;