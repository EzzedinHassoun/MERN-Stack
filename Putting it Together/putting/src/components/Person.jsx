import React, {useState} from "react";
function Person(props) {
  const{firstName, lastName, age, hairColor}=props

  const [counter,setCounter]=useState(age);
  const incAge=(e)=>{
    setCounter(counter +1);
  }
    return (
        <div className="App"> 
        <h2>{firstName}, {lastName}</h2>
        <p>Age: {counter}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={incAge}>Increment Age</button>
        </div>
    );
  }
export default Person;