import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { Link, useNavigate } from 'react-router-dom';


export default () => {
    const [product, setProduct] = useState([]);
    const nan = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setProduct(res.data);
            });
    }, []);

    const createProduct = newProduct => {
        axios.post('http://localhost:8000/api/product', newProduct)
            .then(res => {
                setProduct([...product, res.data]);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(() => setProduct(product.filter(p => p._id !== id)))
            .catch(err => console.error(err));
        nan('/')
    };


    return (
        <div>
            <ProductComponent
                onSubmitProp={createProduct}
                initialTile=""
                initialPrice=""
                initialDescription=""
            />
            <hr />
            <ul>
                {product.map((prod, idx) => (
                    <li key={idx}>
                        <Link to={`/product/${prod._id}`}>{prod.title}</Link>
                        {" | "}
                        <Link style={{ color: 'green' }} to={`/product/${prod._id}/edit`}>Edit</Link>
                        {" | "}
                        <button
                            onClick={() => handleDelete(prod._id)}
                            style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
};
