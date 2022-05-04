import React from 'react';
import image1 from '../../../images/image1.jpg'

const FoodDeliverSection = () => {
    return (
        <div className='container mt-5'>


            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className='text-success'>Quick</h2>
                    <h2 className='text-success'>delivery at your doorstep</h2>
                    <p>We provide free home delivery.We are Open at 8am to 7pm.Order your products and you will get your products safely at home.In First order enjoy 20% discount....
                        <b className='text-success'>Happy shopping</b> </p>


                </div>
                <div className="col-md-6">
                    <img className='w-100' src={image1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default FoodDeliverSection;