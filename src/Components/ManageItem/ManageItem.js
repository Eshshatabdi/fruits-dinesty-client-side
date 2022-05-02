import React from 'react';
import useItem from '../../hooks/useItem';
import MoreItem from '../MoreItem/MoreItem';

const ManageItem = () => {
    const [products] = useItem();
    return (
        <div className='container mt-5 g-5'>
            <div className="row">
                {
                    products.map(product => <MoreItem
                        key={product.key}

                        product={product}>
                    </MoreItem>)
                }
            </div>



        </div>
    );
};

export default ManageItem;