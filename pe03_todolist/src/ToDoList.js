import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, deleteTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </ul>
  );
}
