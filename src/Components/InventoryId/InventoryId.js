import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryId = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    // const [update, setUpdate] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const handleUpdateQuantity = () => {

        const newQuantity = (parseInt(item.quantity) - 1);
        const updateQuantity = { newQuantity }
        const url = `http://localhost:5000/service/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setUpdate(data)
                alert('quantity updated')
            })


    }
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
                        <button onClick={handleUpdateQuantity} className='btn btn-danger'>Deliverd</button>
                    </div>

                </div>
            </div>
            <div className='text-center   '>
                <Link to='/manageitem' ><button className='btn btn-danger '>see more in manage item </button></Link>
            </div>

        </div>
    );
};

export default InventoryId;