

const Todo{
    constructor(){
        this.tasks=[]
    }
    addTask(text){
        const newTask={id:Date.now(),text:text};
        this.tasks.push(newTask);
        return this.tasks
    }
}



// for Controllers

import Todo from 'files';
import React, {useState} from "react";

const Controller = () =>{
    const [model] = useState(new Todo());
    const [tasks,setTasks] = useState([]);

    const handleAddTask = (text) => {
        setTasks()[...model,addTask(text)]
    }
}

export default Controller;



//for View

const TodoView =(tasks,addTask) => {
    const [task, setTask] = useState("");
    return (
        <div>
            Add task
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTask(task)}>Add</button>
        </div>
    )
}