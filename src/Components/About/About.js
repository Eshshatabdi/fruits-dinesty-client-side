import React from 'react';
import quality from '../../images/quality.jpg'

const About = () => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center align-items-center ">
                <h2 className='text-center text-success'>Abou our Quality</h2>
                <div className="col-md-6">

                    <h2 className='text-success text-center'>Our Quality and Storage</h2>
                    <div className="card">
                        <p className=''>
                            Once in our warehouses, the care continues. Each delivery is entered into a track-and-trace system that ensures that the exact location and status of every item is known at all times. Each storage area has individual climate control, ensuring the correct temperatures and humidity for each type of produce.  Our facilities are equipped to permit longer-term storage when necessary, utilising our advanced atmospheric control system. Produce can be pre-packaged if desirable: at Special Fruit all packaging needs and wishes are open to discussion. Before delivery to customers, a further stage of quality control is part of the process.

                            Physical checks are performed during final packaging, and sub-standard produce is removed. A similar check is performed during order picking to ensure that all orders entering the climate-controlled vehicle fleet at our disposal are in perfect condition.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img className='w-100' src={quality} alt="" />

                </div>
            </div>

        </div>
    );
};

export default About;