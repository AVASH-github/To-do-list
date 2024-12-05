import { useState } from "react";
import styles from "./counter.module.css"
function Counter(){

        const[count,setCount]=useState(0);

    const clickCount=()=>{
       setCount(count+1);
    }
    return(
<>
<h1>COUNTER</h1>
<button className={styles.button1} onClick={clickCount}>CLick Me</button>

<p>Click Count :{count}</p>

</>

    );
}

export default Counter;