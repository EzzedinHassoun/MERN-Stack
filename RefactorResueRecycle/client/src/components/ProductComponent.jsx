import React, { useState } from 'react';

const ProductComponent = ({ initialTile, initialPrice, initialDescription, onSubmitProp }) => {
    const [title, setTitle] = useState(initialTile);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price: </label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description: </label><br />
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" value="Add Product" />
        </form>
    );
};

export default ProductComponent;
