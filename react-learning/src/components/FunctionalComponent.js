import { useState } from "react";
import React from 'react'

function FunctionalComponent() {
  let [gopal, setGopal] = useState('Gopal');

  const changefunction=()=>{
    console.log("button is clicked");
    setGopal("value is changed");
    console.log(gopal);
  }
  return (
    <div>
      {gopal}
      <br/>
      <button onClick={changefunction}>click here</button>
    </div>
  )
}

export default FunctionalComponent






