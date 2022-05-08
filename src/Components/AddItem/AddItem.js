import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const addItemHandler = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const supplierName = user?.displayName;
        const supplierEmail = user?.email;
        const sold = 0;
        const img = event.target.img.value;

        const data = { name, description, img, price, quantity, supplierName, supplierEmail, sold }
        const url = `https://stormy-depths-75418.herokuapp.com/service`
        fetch(url, {


            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => alert('successfully data added'))

        event.target.reset();


    }





    return (
        <div className='container'>
            <h2 className='text-center text-success'>Please add your item</h2>
            <form className='mx-auto text-center justify-content-center item mt-3' onSubmit={addItemHandler}>
                <input className='my-2 ' type="text" placeholder='image url' name="img" required />
                <br />
                <input className='mb-2' type="text" placeholder='name' name="name" required />
                <br />
                <input className='mb-2' type="number" placeholder='price' name="price" required />
                <br />
                <input className='mb-2' type="number" placeholder='quantity' name="quantity" required />
                <br />
                <textarea className='mb-2' type="text" placeholder='description' name="description" required />
                <br />
                <input className='btn btn-danger' type="submit" value="add your item" />

            </form>

        </div>
    );
};

export default AddItem;