import React from 'react';
import facebook from '../../images/facebook1.png';
import instagram from '../../images/insta.png';

const Footer = () => {
    return (
        <div className='bg-black text-light mt-3 d-flex justify-content-evenly' >

            <div className='mt-5'>
                <h5>Fruit Dynasty</h5>
            </div>
            <div>
                <h5>Services</h5>
                <small>sell product in cheap rate</small> <br />
                <small>service home delivery</small>
                <p><small>Hygienic product</small></p>
            </div>
            <div>
                <h5>Contact us</h5>
                <p>email:dynasty@gmail.com</p>
                <img src={instagram} alt="" className='mx-2' />
                <img src={facebook} alt="" />

            </div>

        </div>


    );
};

export default Footer;