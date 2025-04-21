/* 
    - enter task input field with add task button
    - list of to-do tasks
        - each task has a check button to complete the task
            - the task will then get moved to completed tasks
        - each task has a delete button
        
    - list of completed tasks 
        - each task has a delete button 
        - each task has a restore button
            - the task wil lthen get moved to to-do tasks
    
    - reset tasks button
        - all completed tasks will be moved to to-do tasks

*/

import {useState} from "react"
import "./ToDoList.css"
class Task {
    constructor(id, name, status) {
        this.id = id
        this.name = name
        this.status = status
    }
}

let nextTaskId = 1

function ToDoList() {
    
    const [toDoTasks, setToDoTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    const [taskName, setTaskName] = useState("")

    function handleNameChange(e) {
        setTaskName(e.target.value)
    }

    function addNewTask() {
        const taskNameInputEl = document.getElementById("taskNameInput")
        const newTask = new Task(nextTaskId++, taskNameInputEl.value, "to-do")

        setToDoTasks(prevTasks => [...prevTasks, newTask])
        setTaskName("")
    }

    function setTaskComplete(task) {
        setToDoTasks(prevToDoTasks => prevToDoTasks.filter(toDoTask => toDoTask.id !== task.id))
        setCompletedTasks(prevCompletedTasks => [...prevCompletedTasks, task])
        
    }

    function setTaskToDo(task) {
        setCompletedTasks(prevCompletedTasks => prevCompletedTasks.filter(compTask => compTask.id !== task.id))
        setToDoTasks(prevToDoTasks => [...prevToDoTasks, task])
    }

    function deleteTask(taskList, task) {
        taskList = taskList.toLowerCase();
        if (taskList == "todotasks") {
            setToDoTasks(prevToDoTasks => prevToDoTasks.filter(toDoTask => toDoTask.id !== task.id))
        } else if (taskList == "completedtasks") {
            setCompletedTasks(prevCompletedTasks => prevCompletedTasks.filter(compTask => compTask.id !== task.id))
        } else {
            return
        }
    }

    function resetCompletedTasks() {
        setToDoTasks(prevTasks => [...prevTasks, ...completedTasks])
        setCompletedTasks([])
    }

    function handleSubmit(e) {
        e.preventDefault()
        addNewTask()
    }

    return (
        <div className="app-container">
            <h1 className="app-title">TO-DO LIST</h1>
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <input
                        id="taskNameInput"
                        onChange={handleNameChange}
                        value={taskName}
                        placeholder="Enter task"
                        type="text"
                    />
                    <button type="submit" className="button">Add Task</button>
                </form>

                
            </div>

            <div className="list-container">
                <h2 className="task-list-title">To-Do Tasks</h2>
                <ul className="task-list">
                    {toDoTasks.map((task) => 
                        <li className="task-list-item" key={task.id}>
                            <p className="task-name">{task.name}</p>
                            <div className="list-item-buttons">
                                <button className="button" onClick={() => setTaskComplete(task)}>Complete Task</button>
                                <button className="button" onClick={() => deleteTask("todotasks", task)}>Delete</button>
                            </div>
                            
                        </li>
                    )}
                </ul>
            </div>

            <div className="list-container">
                <h2 className="task-list-title">Completed Tasks</h2>
                <ul className="task-list">
                    {completedTasks.map(task =>
                        <li className="task-list-item" key={task.id}>
    
                            <p className="task-name">{task.name}</p>
                            <div className="list-item-buttons">
                                <button className="button" onClick={() => setTaskToDo(task)}>Reset Task</button>
                                <button className="button" onClick={() => deleteTask("completedtasks", task)}>Delete</button>
                            </div>
                        </li>
                    )}
                </ul>
                <button className="button" onClick={resetCompletedTasks}>Reset All</button>
            </div>
        </div>
    )
}

export default ToDoList