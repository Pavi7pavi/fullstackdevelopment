import {React,useState} from 'react'

function ConditionalRendering() {
    const [loggedin, setLoggedin] = useState(false)

    const logout=()=>{
        setLoggedin(false);
    }

    const login=()=>{
        setLoggedin(true);
    }


  return (
    <div>
        {loggedin? <h1>Welcome Gopal</h1>:  <h1>Welcome Guest</h1>}


        <button onClick={logout}>Logout</button>
        <br/>
        <button onClick={login}>Login</button>


        {/* [condition]?[if block]:[else block]

        if(condition){

        }else{

        } */}
   
     
    

    </div>
  )
}

export default ConditionalRendering
