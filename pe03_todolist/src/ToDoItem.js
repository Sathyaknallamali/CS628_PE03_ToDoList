export default function ToDoItem({ task, deleteTask }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
      <span>{task}</span>
      <button onClick={deleteTask} style={{ marginLeft: "10px", padding: "5px 10px" }}>
        Delete
      </button>
    </li>
  );
}
