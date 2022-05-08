import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import LoadMyItem from '../LoadMyItem/LoadMyItem';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const email = user?.email;
    



    useEffect(() => {


        fetch(`https://stormy-depths-75418.herokuapp.com/services/?email=${email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            })


            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [myItems, user])




    const deleteMyItem = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://stormy-depths-75418.herokuapp.com/service/${id}`
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
            <h2>your item:{myItems.length}</h2>

            {
                myItems.map(item => <LoadMyItem
                    key={item._id}
                    item={item}
                    deleteMyItem={deleteMyItem}
                >
                </LoadMyItem>)

            }


        </div>
    );
};

export default MyItem;