import React, {useState} from 'react'

const Todolist = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        setTasks([...tasks,{id:Date.now(),text:task,completed:false}])
        setTask("")
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggle=(id)=>{
        setTasks(tasks.map(task=> task.id===id? {...task,completed:false}:task))
    }
    return (
        <div>

            <div>
                Add task
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onClick={addTask}>Add </button>
            </div>
            <ul>
                {
                    tasks.map((task, index) =>(
                        <li key={index}>
                            <span className={`cursor-pointer ${
                                task.completed ? 'line-through' : ''
                            }`}
                            onClick={()=>toogle(task.id)}
                            >
                                {task.text}
                            </span>
                            <button onClick={()=>deleteTask(task.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todolist
