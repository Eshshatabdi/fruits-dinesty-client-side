import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, img, name, price, description, quantity, supplierName } = item;


    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }

    return (

        <div className='col-md-4 gy-5'>
            <div className="item">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>price:${price}/lb</p>
                <p>Description:{description}</p>
                <p>Quantity:{quantity}lb</p>
                <p>supplier Name:{supplierName}</p>
                <button onClick={() => navigateToInventory(_id)} className='btn btn-danger'>update</button>

            </div>

        </div>



    );
};

export default Item;