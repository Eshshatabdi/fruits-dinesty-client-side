import React from 'react';
import image from '../../images/image.webp'

const Nutrition = () => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center align-items-center  ">
                <div className="col-md-6 ">
                    <h2 className='text-success'>Get The Nutrition</h2>
                    <h2 className='text-success '> from our organic fruits</h2>
                    <ul className="item ">
                        <p>Fruits are-</p>
                        <li>Rich in vitamins,minerals and calcium</li>
                        <li>Excellent source of energy</li>
                        <li>Increase Immunity</li>
                        <li>Helps in skin and hair</li>

                    </ul>

                </div>
                <div className="col-md-6">
                    <img className='w-100' src={image} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Nutrition;