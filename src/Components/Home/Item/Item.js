import React from 'react';
import './Item.css';

const Item = ({ product }) => {
    const { img, name } = product;
    return (
        <div className='col-md-4 gy-5'>
            <div className="item">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <button>update</button>

            </div>

        </div>
    );
};

export default Item;