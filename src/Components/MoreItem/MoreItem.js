import { useNavigate } from 'react-router-dom';
import useItem from '../../hooks/useItem';


const MoreItem = ({ item }) => {
    const { _id, img, name, price, description, quantity, supplierName } = item;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }


    const [items, setItems] = useItem();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;

            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);

                    }



                })

        }
    }


    return (
        <div className='col-md-4 gy-5'>
            <div className="item">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>price:${price}/lb</p>
                <p>Description:{description}</p>
                <p>Quantity:{quantity}lb</p>
                <p>supplier Name:{supplierName}</p>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => navigateToInventory(_id)} className='btn btn-secondary me-2'>update</button>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
                </div>


            </div>

        </div>
    )
}

export default MoreItem;