import React, { useState } from 'react';
import useItem from '../../hooks/useItem';

const MoreItem = ({ item }) => {
    const { _id, img, name, price, description, quantity, supplierName } = item;
    // const [deletes,setDeletes]= useState({});
    const [items, setItems] = useItem();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })

        }
    }


    return (
        <div className='col-md-4 gy-5'>
            <div className="item">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>price:${price}/lb</p>
                <p>Description:{description}</p>
                <p>Quantity:{quantity}</p>
                <p>supplier Name:{supplierName}</p>
                <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>

            </div>

        </div>
    )
}

export default MoreItem;