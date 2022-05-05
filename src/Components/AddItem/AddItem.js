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
        const img = event.target.img.value;

        const data = { name, description, img, price, quantity, supplierName, supplierEmail }
        const url = `http://localhost:5000/service`
        fetch(url, {


            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => alert('successfully data added'))

        event.target.reset();


    }




    // const email = user?.email
    // console.log(email)

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     // data.[email] = email
    //     console.log(data);
    //     const url = `http://localhost:5000/service`
    //     fetch(url, {


    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })




    // }
    return (
        <div className='container'>
            <h2 className='text-center'>Please add your item</h2>
            <form className='mx-auto w-50' onSubmit={addItemHandler}>
                <input type="text" placeholder='image url' name="img" required />
                <br />
                <input type="text" placeholder='name' name="name" required />
                <br />
                <input type="number" placeholder='price' name="price" required />
                <br />
                <input type="number" placeholder='quantity' name="quantity" required />
                <br />
                <input type="text" placeholder='description' name="description" required />
                <br />
                <input type="submit" value="add your item" />

            </form>

        </div>
    );
};

export default AddItem;