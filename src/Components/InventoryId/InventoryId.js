import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryId = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="item">
                        <img src={item.img} alt="" />
                        <h4>Name:{item.name}</h4>
                        <p>price:${item.price}/lb</p>
                        <p>Description:{item.description}</p>
                        <p>Quantity:{item.quantity}</p>
                        <p>supplier Name:{item.supplierName}</p>
                        <button className='btn btn-danger'>Deliverd</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default InventoryId;