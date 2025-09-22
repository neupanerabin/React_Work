import { element } from "prop-types";
import React, { useState } from "react"
import "./ToDoList.css"; // Make sure the path is correct


function ToDoList() {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower"]);
  const [newTask, setNewTask] = useState("");


  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }


  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }

  return (<div className="to-do-list">
    <h1 className="heading">To-Do-List</h1>

    <div>
      <input type="text" placeholder="Enter a task..." value={newTask}
        onChange={handleInputChange} className="input" />
      <button className="add-button" onClick={addTask} >Add A Task</button>

      <ol>
        {tasks.map((task, index) =>
          <li key={index} className="list">
            <span className="text">{task}</span>
            <button className="delete-button"
              onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button"
              onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button"
              onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>)}
      </ol>
    </div>

  </div>);

}

export default ToDoList