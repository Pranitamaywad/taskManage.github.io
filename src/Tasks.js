import  { useState } from "react";
import {FaTimes,FaThumbsUp} from "react-icons/fa";
import './task.css';

const Tasks=({title, descrip, setTasks })=>{
    const [isDone , setIsDone] = useState(false);
    const clickhandler=()=>{}   
    const deleteTask = () => {
        setTasks(prevTask => {
            const filteredTasks = prevTask.filter(task => task.title !== title);
            return filteredTasks;
        })
    };  
    const[isEditable,setisEditable] = useState(false)
    const[enteredTask,setEnteredtask] = useState(title)
    const[enteredDescrip,setEnteredDescrip] = useState(descrip)
    
    const addTask=(e)=>{
        setTasks((prevTask)=>{
            const filteredTasks = prevTask.filter(task => task.title !== title);
            return [...filteredTasks,
                {
                    title: enteredTask,
                    descrip: enteredDescrip
                }] 
        });
     
        setEnteredtask(enteredTask);
        setEnteredDescrip(enteredDescrip);
        setisEditable(false);
    }

    
    return(
        <div className="card" style={{width: 70 + 'rem'}}>
        <div className="card-body">
        <span>
            <input className="card-title" value={enteredTask } disabled={!isEditable} onChange={(e) => setEnteredtask(e.target.value)}/>
            <input className="card-title-des" value={enteredDescrip} disabled={!isEditable} onChange={(e) => setEnteredDescrip(e.target.value)}/>
            <div className="cadRight">
                <div>
                <button className="btn btn-secondary" onClick={() =>setisEditable(!isEditable) }>Edit Now</button>
                <button className="btn btn-success" type="submit" onClick={addTask}>Update</button>
                </div>
            { !isDone ? <button className='btn btn-primary' onClick={ () => setIsDone(!isDone)}>Complete</button> : null }
            {isDone ? <button className='btn btn-success' onClick={clickhandler}><FaThumbsUp/></button> : null }
                <button className='btn btn-danger' onClick={ deleteTask }><FaTimes/></button>
            </div>
        </span>
           
            </div>
        </div>
    )
}
export default Tasks;