import React from 'react';
import useItem from '../../hooks/useItem';
import MoreItem from '../MoreItem/MoreItem';

const ManageItem = () => {
    const [items] = useItem();
    return (
        <div className='container mt-5 g-5'>
            <div className="row">
                {
                    items.map(item => <MoreItem
                        key={item._id}

                        item={item}>
                    </MoreItem>)
                }
            </div>



        </div>
    );
};

export default ManageItem;