import React from 'react';

const LoadMyItem = ({ item, deleteMyItem }) => {
    const { _id, img, name, price, description, quantity, supplierName } = item;
    return (
        <div>
            <div className="row d-flex justify-content-center my-2">
                {/* <div className="col-md-12"> */}
                <div className="item">
                    <img src={img} alt="" />
                    <h4>Name:{name}</h4>
                    <p>price:${price}/lb</p>
                    <p>Description:{description}</p>
                    <p>Quantity:{quantity}</p>
                    <p>supplier Name:{supplierName}</p>
                    <button onClick={() => deleteMyItem(_id)} className='btn btn-danger mt-2'>Delete</button>
                </div>

                {/* </div> */}
            </div>

        </div>
    );
};

export default LoadMyItem;