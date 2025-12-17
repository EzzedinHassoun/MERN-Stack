import { useState } from 'react';
import axios from 'axios';

export const Form = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description,setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/createproduct", {name, price, description})
        .then ((res)=> console.log(res))
        .catch ((err)=> console.log(err))
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>			
                <label>Name:</label>
                <input type={"text"} onChange={(e) => setName(e.target.value)} placeholder={"name"} />
                <br />
                <br />
                <label>Price:</label>
                <input type={"text"} onChange={(e) => setPrice(Number(e.target.value))} placeholder={"0"} />
                <br />
                <br />
                <label>Description:</label>
                <input type={"text"} onChange={(e) => setDescription(e.target.value)} placeholder={"description"} />
                <br />
                <br />
                <input type={"submit"} />
            </form>
        </>
    )
}
