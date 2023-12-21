import { useEffect, useState } from "react";
import CreateTask from "../CreateTask/CreateTask";
import ListTasks from "../ListTasks/ListTasks";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const Tasks = () => {

    const [tasks, setTasks] = useState([])

    console.log('tasks', tasks)

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="bg-slate-700 text-white rounded-lg w-full h-full flex flex-col items-center pt-10 gap-16">
                <CreateTask tasks={tasks} setTasks={setTasks} />
                <ListTasks tasks={tasks} setTasks={setTasks} />
            </div>
        </DndProvider>
    );
};

export default Tasks;