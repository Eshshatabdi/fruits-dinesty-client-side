import React, { useEffect, useState } from 'react';
import useItem from '../../../hooks/useItem';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItem();

    return (
        <div className='container mt-5 g-5'>
            <div className="row">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}

                        item={item}>
                    </Item>)
                }
            </div>



        </div>
    );
};

export default Items;