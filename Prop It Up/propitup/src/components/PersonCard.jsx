import React from 'react'

function PersonCard(props) {
  const {firstname, lastname, age, Haircolor} = props
  console.log(firstname);
  
  return (
  <>
<h2> {firstname}, {lastname} </h2>
<p> Age : {age}</p>
<p> Hair color : {Haircolor} </p>
  </>
  )
}

export default PersonCard