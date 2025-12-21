import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductComponent from './ProductComponent';

const ProductUpdateComponent = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, []);

    const updateProduct = updatedProduct => {
        axios.patch('http://localhost:8000/api/product/' + id, updatedProduct)
            .then(res => {
                console.log("Updated:", res.data);
                navigate("/product");
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            {loaded && (
                <ProductComponent
                    onSubmitProp={updateProduct}
                    initialTile={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
        </>
    );
};

export default ProductUpdateComponent;
