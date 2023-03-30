import React from 'react'
import Button from "@mui/material/Button";

function ReactButton(props) {
  return (
    <div>
       <Button variant={props.type} color={props.color}>{props.value}</Button>
    </div>
  )
}

export default ReactButton
        