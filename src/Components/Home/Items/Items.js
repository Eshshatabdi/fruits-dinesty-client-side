import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItem from '../../../hooks/useItem';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItem();

    return (
        <div className='container mt-5 g-5'>
            <h2 className='text-center text-success '>Inventory Items</h2>
            <div className="row">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}

                        item={item}>
                    </Item>)
                }
            </div>
            <div className='text-center my-5 '>
                <Link to='/manageitem' ><button className='btn btn-danger'>Manage inventories</button></Link>
            </div>



        </div>
    );
};

export default Items;