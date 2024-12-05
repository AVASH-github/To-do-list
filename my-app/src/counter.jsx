import { useState } from "react";

function Counter(){

        const[count,setCount]=useState(0);

    const clickCount=()=>{
       setCount(count+1);
    }
    return(
<>
<h1>COUNTER</h1>
<button className="add-button" onClick={clickCount}>CLick Me</button>

<p>Click Count :{count}</p>

</>

    );
}

export default Counter;