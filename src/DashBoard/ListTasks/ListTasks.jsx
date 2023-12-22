/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        const fTodos = tasks?.filter((task) => task.status === "todo") || [];
        const fInProgress = tasks?.filter((task) => task.status === "inprogress") || [];
        const fClosed = tasks?.filter((task) => task.status === "closed") || [];

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks]);

    const statuses = ["todo", "inprogress", "closed"];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {statuses.map((status, index) => (
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                />
            ))}
        </div>
    );
};

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    let text = "To-Do";
    let bg = "bg-slate-500";
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "OnGoing";
        bg = "bg-purple-500";
        tasksToMap = inProgress;
    }

    if (status === "closed") {
        text = "Completed";
        bg = "bg-green-500";
        tasksToMap = closed;
    }

    const addItemToSection = (id) => {
        setTasks((prev) => {
            const mTasks = prev.map((t) =>
                t.id === id ? { ...t, status: status } : t
            );

            localStorage.setItem("tasks", JSON.stringify(mTasks));
            toast("Task status changed", { icon: "👍" });

            return mTasks;
        });
    };

    return (
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-violet-400" : ""}`}>
            <Header text={text} bg={bg} count={tasksToMap?.length} />
            {tasksToMap?.length > 0 &&
                tasksToMap.map((task) => (
                    <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
                ))}
        </div>
    );
};

const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}
            <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
                {count}
            </div>
        </div>
    );
};

const Task = ({ task, tasks, setTasks }) => {
    const [newTaskName, setNewTaskName] = useState(task.name);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleRemove = (id) => {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        toast("Task Removed", { icon: "❎" });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedName = newTaskName.trim();

        if (updatedName && task.id) {
            const updatedTasks = tasks.map((t) =>
                t.id === task.id ? { ...t, name: updatedName } : t
            );

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            setTasks(updatedTasks);
            setNewTaskName(updatedName);
            toast("Task Updated. Unchanged after refresh.", { icon: "✅" });
        } else {
            toast("Invalid Update", { icon: "❗" });
        }
    };

    return (
        <div
            ref={drag}
            className={`py-10 px-2 mt-6 shadow-md rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"
                }`}
        >
            <form onSubmit={handleUpdate} className="flex flex-col">
                <textarea
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn bg-blue-600 btn-block my-4 btn-primary text-white"
                >
                    Update
                </button>
                <button
                    onClick={() => handleRemove(task?.id)}
                    className="btn bg-red-600 btn-block my-4 btn-primary text-white"
                >
                    Delete
                </button>
            </form>
        </div>
    );
};
