import React from 'react';

const MoreItem = ({ item }) => {
    const { img, name, price, description, quantity, supplierName } = item;

    return (
        <div className='col-md-4 gy-5'>
            <div className="item">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>price:${price}/lb</p>
                <p>Description:{description}</p>
                <p>Quantity:{quantity}</p>
                <p>supplier Name:{supplierName}</p>
                <button>update</button>

            </div>

        </div>
    )
}

export default MoreItem;