import { useState } from "react";


function GroceryForm(){

    const [item,setItem]=useState("");
    const[items,setItems]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
if(item.trim()===""){
    alert("PLEASE ENTER THE GROCERY ITEM");
    return;

}
setItems([...items, item]);
setItem("");
    }
    return(
        <>
            <h1>Grocery Items</h1>
            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the Grocery Items...." value={item} onChange={(e)=>setItem(e.target.value)} className="input"/>

                <button type="submit">Add Item</button>
            </form>  

            <ul>
              {  items.map((item,index)=>(
                <li key={index}>{item}</li>
                 ) )}
            </ul>
        </>
    );
}

export default GroceryForm;