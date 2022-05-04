import React from 'react';
import { Link } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import MoreItem from '../MoreItem/MoreItem';

const ManageItem = () => {
    const [items] = useItem();
    return (
        <div className='container mt-5 g-5'>
            <h2 className='text-center text-success '>Inventory Items</h2>
            <div className="row">
                {
                    items.map(item => <MoreItem
                        key={item._id}

                        item={item}>
                    </MoreItem>)
                }
            </div>
            <div className='text-center w-100 mt-5  '>
                <Link to='/additem' ><button className='btn btn-danger '>Add new item </button></Link>
            </div>



        </div>
    );
};

export default ManageItem;