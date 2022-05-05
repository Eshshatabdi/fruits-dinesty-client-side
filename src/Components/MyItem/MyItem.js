import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import LoadMyItem from '../LoadMyItem/LoadMyItem';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);


    const email = user?.email;
    useEffect(() => {


        fetch(`http://localhost:5000/service/?email=${email}`)

            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [myItems, user, email])




    const deleteMyItem = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        console.log(data)
                        const restMyItem = myItems.filter(item => item._id !== id)
                        setMyItems(restMyItem);
                    }
                })
        }





    }


    return (
        <div className='container'>

            {
                myItems.map(item => <LoadMyItem
                    key={item._id}
                    item={item}
                    deleteMyItem={deleteMyItem}
                ></LoadMyItem>)

            }
            {/* <h2>Your Items:{myItems.length}</h2> */}
            {/* //     <div className='w-50 mx-auto'>
    //         <h2 className='text-center text-success'>Please add your item</h2>
    //         <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}> */}
    //             {/* <input className='mb-2 ' placeholder='Name' value={user.displayName} readOnly disabled {...register("displayName", { required: true, maxLength: 20 })} /> */}
            {/* //             <input className='mb-2' placeholder='email' value={email} type="email"  {...register("email")} />


    //             <input className='mb-2 ' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
    //             <textarea className='mb-2' placeholder='Description' {...register("description")} />

    //             <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
    //             <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
    //             <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />

    //             <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
    //             <input className='btn btn-danger' type="submit" value='Add Service' />
    //         </form> */}



        </div>
    );
};

export default MyItem;