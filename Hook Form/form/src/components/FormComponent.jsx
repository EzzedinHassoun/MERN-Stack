import {useState} from "react";


const FormComponent = () =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [confirmpassowrd, setConfirmpassowrd] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstname, lastname, email, password, confirmpassowrd };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassowrd("");

    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <br />
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <br />
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <br />
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <br />
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmpassowrd} onChange={ (e) => setConfirmpassowrd(e.target.value) } />
            </div>
            <br />
            <input type="submit" value="Create User" />
            <h3>First Name: {firstname}</h3>
            <h3>Last Name: {lastname}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {confirmpassowrd}</h3>
        </form>
    );
}

export default FormComponent