import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryId = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [update, setUpdate] = useState([])
    useEffect(() => {
        const url = `https://stormy-depths-75418.herokuapp.com/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item, update]);
    const handleUpdateQuantity = () => {

        const newQuantity = (parseInt(item.quantity) - 1);
        const updateQuantity = { newQuantity }
        const url = `https://stormy-depths-75418.herokuapp.com/service/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => {

                setUpdate(data)
                alert('quantity updated')
            })

        if (newQuantity === 0) {

            return toast('sold out')
        }


    }
    const handleRestock = (event) => {
        event.preventDefault();
        const number = (event.target.number.value) * 1;
        const newQuantity = parseInt(item.quantity) + number;
        const updateQuantity = { newQuantity }
        const url = `https://stormy-depths-75418.herokuapp.com/service/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUpdate(data)
                alert('quantity updated')
            })

        event.target.reset();



    }
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center my-2">
                {/* <div className="col-md-12"> */}
                <div className="item">
                    <img src={item.img} alt="" />
                    <h4>Name:{item.name}</h4>
                    <p>price:${item.price}/lb</p>
                    <p>Description:{item.description}</p>
                    <p>Quantity:{item.quantity}lb</p>
                    <p>supplier Name:{item.supplierName}</p>
                    <button onClick={handleUpdateQuantity} className='btn btn-danger mt-2'>Deliverd</button>
                </div>

                {/* </div> */}
            </div>

            <form onSubmit={handleRestock} className='text-center mb-5'>
                <input type="number" name="number" id="" />
                <br />
                <input className='btn btn-danger' type="submit" value="Restock the item" />
            </form>


            <div className='text-center'>
                <Link to='/manageitem' ><button className='btn btn-danger '>Manage inventories </button></Link>
            </div>

        </div>
    );
};

export default InventoryId;