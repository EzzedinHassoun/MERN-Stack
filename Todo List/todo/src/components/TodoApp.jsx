import React, { useState } from "react";
import "../App.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: "Get Python black belt.", completed: true }]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = { id: Date.now(), text: newTask.trim(), completed: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="todo-input-section">
        <input type="text" placeholder="Adding new tasks" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="todo-input" />
        <button onClick={handleAdd} className="add-btn">Add</button>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="todo-item">
          <span className={task.completed ? "task-text completed" : "task-text"}>{task.text}</span>
          <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} className="todo-checkbox" />
          <button onClick={() => handleDelete(task.id)} className="delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
