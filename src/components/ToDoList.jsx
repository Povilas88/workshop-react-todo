import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState(['one', 'two', 'three']);
    const [newTask, setNewTask] = useState('');

    function handelInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {}

    function deleteTask(index) {}

    function moveTaskUp(index) {}

    function moveTaskDown(index) {}

    return (
        <>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handelInputChange}
                />
                <button className="addButton" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="deleteButton"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="moveButton"
                            onClick={() => moveTaskUp(index)}
                        >
                            Move up
                        </button>
                        <button
                            className="moveButton"
                            onClick={() => moveTaskDown(index)}
                        >
                            Move down
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoList;
