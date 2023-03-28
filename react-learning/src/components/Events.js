import { React, useState, useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

function Events() {
  const [name, setName] = useState("Gopal");
  const [username, setUsername] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    console.log("use effecxt called");
  
  },[username]);







  const changename = () => {
    console.log("name is changfed");
    if (name == "Gopal") {
      setName("Mohan");
    } else {
      setName("Gopal");
    }
  };



  return (
    <div>
      <h1>{name}</h1>
      <input type={"text"} value={username} onChange={(event)=>{
console.log(event.target.value);
setUsername(event.target.value);
      }}/>
      <button onClick={changename}>change</button>
      <button onClick={()=>{
navigate("list")
      }}>Go To List</button>
    </div>
  );
}

export default Events;
