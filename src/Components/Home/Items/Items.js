import React, { useEffect, useState } from 'react';
import useItem from '../../../hooks/useItem';
import Item from '../Item/Item';

const Items = () => {
    const [products] = useItem();
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))

    // }, [])
    return (
        <div className='container mt-5 g-5'>
            <div className="row">
                {
                    products.slice(0, 6).map(product => <Item
                        key={product.key}

                        product={product}>
                    </Item>)
                }
            </div>



        </div>
    );
};

export default Items;