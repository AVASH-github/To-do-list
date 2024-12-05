import { useState } from "react";
import styles from "./ToDoList.css"
function ToDoList(){

const [task,setTask]=useState('');
const [newTask,setNewTask]=useState([]);

const addtask=()=>{
    if (task.trim()){
        setNewTask([...newTask,task]);
        setTask('');
    }
}
const deleteTask=(indexToDelete)=>{
    setNewTask(newTask.filter((_, index) => index !== indexToDelete));
}
const deleteAllTask=()=>{
    setNewTask([]);
}
    return (
        <div className="todo"> 
            <h1>
                TO-DO-LIST
            </h1>
       
            <div  className="divinput">
             
                <input type="text" placeholder="Enter the Task...." value={task} 
                onChange={(e)=>setTask(e.target.value)}  className="input" />
                <button onClick={addtask} className="add-button">ADD</button>
             <button onClick={deleteAllTask} className="delete-button" > DELETE ALL</button>
              
            

            <ul >
                {newTask.map((t,index)=>(
                    <li>{t}
                    
                    <button onClick={()=>deleteTask(index)} className="delete-button" >DELETE</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );

}


export default ToDoList;