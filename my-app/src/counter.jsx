import { useState } from "react";
function Counter(){

    const[count,setCount]=useState(0);

    const clickCount=()=>{
        setCount(count+1);
    }
    return (

<>
<h1>Counter</h1>

<button onClick={clickCount} > CLICK ME</button>

<p>CLICK COUNT: {count}</p>
</>

    );
}

export default Counter;