import { useState } from "react";
import ToDoList from "./ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter task"
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
