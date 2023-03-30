import React, { useRef } from 'react'

function Refs() {
const textinput=useRef();
    const focusInput =(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
    }
    const makeactive =()=>{
        console.log(textinput);
        textinput.current.focus();
    }
  return (
    <div className='container'>
      {/* <input type="text"  />
      <button onClick={focusInput}>Focus Input</button> */}

      <form onSubmit={focusInput}>

        <input type="text" id="name"  ref={textinput}/>
        <input type="submit" id="submit" value="Submit"/>

      </form>
      <br/>

      <button onClick={makeactive}>Make Active </button>
    </div>
  )
}

export default Refs
