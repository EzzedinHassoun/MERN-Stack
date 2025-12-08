import { useState } from "react";

const FormCompnent = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 
    const [formError, setFormError] = useState("");

    // validation
    const [fistnameError, setfirstnameError] = useState("")
    const [lastnameError, setlastnameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [confirmPasswordError, setconfirmPasswordError] = useState("")

    const createUser = (e) =>{
        e.preventDefault();

        if (
            !firstname ||
            !lastname ||
            !email ||
            !password ||
            !confirmpassword ||
            fistnameError ||
            lastnameError ||
            emailError ||
            passwordError ||
            confirmPasswordError
        ) {
            setFormError("Please fill all required fields correctly!");
            return;
        }

        const newUser= {firstname , lastname , email , password , confirmpassword};
        console.log(newUser);

        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmpassword("")
        setHasBeenSubmitted(true)
        setFormError("");
    };

    const handelFirstname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 2){
            setfirstnameError("First name must be at least 2 characters")
        } else {
            setfirstnameError("")
        }
    }

    const handelLastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 2){
            setlastnameError("Last name must be at least 2 characters")
        } else {
            setlastnameError("")
        }
    }

    const handelEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5){
            setemailError("Email must be at least 5 characters")
        } else {
            setemailError("")
        }
    }

    const handelPassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8){
            setpasswordError("Password must be at least 8 characters")
        } else {
            setpasswordError("")
        }

        if (confirmpassword && e.target.value !== confirmpassword){
            setconfirmPasswordError("Passwords do not match")
        } else {
            setconfirmPasswordError("")
        }
    }

    const handelConfirmPassword = (e) => {
        setConfirmpassword(e.target.value)

        if (e.target.value !== password){
            setconfirmPasswordError("Passwords do not match")
        } else {
            setconfirmPasswordError("")
        }
    }

    let message;
    if (hasBeenSubmitted) {
        message = <h3>Thank you for submitting the form!</h3>
    } else {
        message = <h3>Welcome, please submit the form.</h3>
    }

    return(
        <form onSubmit={ createUser }>
            {message}

            {formError && <p style={{color:"red"}}>{formError}</p>}

            <div>
                <label>First Name: </label>
                <input type="text" value={firstname} onChange={handelFirstname} />
                {fistnameError && <p>{fistnameError}</p>}
            </div>

            <div>
                <label>Last Name: </label>
                <input type="text" value={lastname} onChange={handelLastname} />
                {lastnameError && <p>{lastnameError}</p>}
            </div>

            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={handelEmail} />
                {emailError && <p>{emailError}</p>}
            </div>

            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handelPassword} />
                {passwordError && <p>{passwordError}</p>}
            </div>

            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmpassword} onChange={handelConfirmPassword} />
                {confirmPasswordError && <p>{confirmPasswordError}</p>}
            </div>

            <button 
                type="submit" 
                disabled={fistnameError || lastnameError || emailError || passwordError || confirmPasswordError}
            >
                Submit
            </button>
        </form>
    )
}

export default FormCompnent;
