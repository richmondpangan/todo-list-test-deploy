import React, {useState} from 'react'

function TodoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const udpatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(udpatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const udpatedTasks = [...tasks];
            [udpatedTasks[index], udpatedTasks[index - 1]] = [udpatedTasks[index - 1], udpatedTasks[index]];
            setTasks(udpatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const udpatedTasks = [...tasks];
            [udpatedTasks[index], udpatedTasks[index + 1]] = [udpatedTasks[index + 1], udpatedTasks[index]];
            setTasks(udpatedTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button className='move-button' onClick={() => moveTaskDown(index)}>Move Down</button>
                </li>)}
            </ol>
        </div>
    );
}

export default TodoList