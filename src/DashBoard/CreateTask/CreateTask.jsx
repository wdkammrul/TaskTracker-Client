/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

const CreateTask = ({tasks, setTasks}) => {

    const [task, setTask] = useState({
        id: '', 
        name: '',
        status: 'todo' 
    })

    console.log(task)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(task.name.length < 3) 
        return toast.error("A task have more than 3 characters")
    
        if(task.name.length > 100) 
        return toast.error("A task must not be more than 100 characters")

        setTasks((prev) => {

            console.log(prev)

            const list = [...prev, task]

            localStorage.setItem("tasks", JSON.stringify(list))
        
            return list;
        })

        toast.success("Task Created")

        setTask({
            id: '',
            name: '',
            status: 'todo'
        })
    }

    return (
        <form onSubmit={handleSubmit} className="join" >
            <div>
                <div>
                    <input className="input input-bordered join-item"  placeholder="Title"
                     name="description" 
                     type="text"
                     value={task.name}
                        onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
                     /> 
                </div>
            </div>
            <div>
                <div>
                    <input className="input input-bordered join-item" placeholder="Description" name="description" type="text" />
                </div>
            </div>
            <div>
                <div>
                    <input className="input input-bordered join-item" name="deadlines" type="date" placeholder="Deadlines" />
                </div>
            </div>
            <select className="select select-bordered w-52 join-item">
                <option disabled >Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <div className="indicator">
                {/* <span className="indicator-item badge badge-secondary">new</span> */}
                <button className="btn bg-blue-700 hover:bg-blue-500 w-44 join-item">Create</button>
            </div>
        </form>
    );
};

export default CreateTask;