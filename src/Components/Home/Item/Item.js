import React from 'react';
import './Item.css';

const Item = ({ product }) => {
    const { img, name, price, description, quantity, supplierName } = product;

    return (
        <div className='col-md-4 gy-5'>
            <div className="item">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>price:${price}/lb</p>
                <p>Description:{description}</p>
                <p>Quantity:{quantity}</p>
                <p>supplier Name:{supplierName}</p>
                <button className='btn btn-danger'>update</button>

            </div>

        </div>
    );
};

export default Item;