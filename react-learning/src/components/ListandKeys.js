import React from 'react'

function ListandKeys() {
    // const values=[1,2,3,4,5,6,7,8,9];
    const values=["gopal","aishu","pavi","mohan","gopal"];

    // const gopal=values.forEach(element => {
    //     return(
    //         <h1 >{element}</h1>
    //     );
    // });

    const data=values.map((i,index)=>{
       
        return(
            <h1 key={index}>{i}</h1>
        );
    })



    // const gopal=<><h1>1</h1><h1>2</h1><h1>3</h1><h1>4</h1><h1>5</h1><h1>6</h1><h1>7</h1><h1>8</h1><h1>9</h1></>;
    

  return (
    <div style={{margin:"50px"}}>
  
      {data}




      

      
    </div>
  )
}

export default ListandKeys







