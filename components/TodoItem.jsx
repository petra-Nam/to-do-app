
import "../src/App.css";
export default function TodoItem({ todo, index, onToggle, onDelete }) {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <span onClick={() => onToggle(index)}>{todo.text}</span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}