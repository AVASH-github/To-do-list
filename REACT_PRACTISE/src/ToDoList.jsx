import { useState } from "react";

function toDoList(){


    const [task,setTask]=useState('');
    const [newTask,setNewTask]=useState([]);

    const addTask=()=>{
        if(task.trim){
            setNewTask([...newTask,task]);
            setTask('');
        }
    }
const delTask=(indexToDelete)=>{
        setNewTask(newTask.filter((_,index) => index!==indexToDelete));
}

const delAllTask=()=>{
    setNewTask([]);
}
    return (
      
        <div>
        <h1>TO-DO-LIST</h1>
<div className="divinput">
            <input type="text" className="input" placeholder="Enter Your Task...." onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button onClick={addTask} className="add-button">ADD</button>
            <button onClick={delAllTask} className="delete-button" >DELETE ALL</button>
            </div>
       
       <ul>
        {newTask.map((t,index)=>(
        <li>
            {t}
            <button onClick={()=>delTask(index)} className="delete-button">DELETE</button>
        </li>
        ))}
       </ul>

        </div>
        
    );
}

export default toDoList;