function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const formattedDate = todo.dueDate ? new Date(`${todo.dueDate}T00:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'No due date';
  return <article className={`todo-item ${todo.completed ? 'is-complete' : ''}`}>
    <label className="check-wrap"><input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} /><span className="custom-check" /></label>
    <div className="todo-copy"><h3>{todo.title}</h3><p>Due {formattedDate}</p></div>
    <span className={`status ${todo.completed ? 'completed' : 'pending'}`}>{todo.completed ? 'Completed' : 'Pending'}</span>
    <div className="item-actions"><button className="icon-button" title="Edit task" aria-label={`Edit ${todo.title}`} onClick={() => onEdit(todo)}>✎</button><button className="icon-button danger" title="Delete task" aria-label={`Delete ${todo.title}`} onClick={() => onDelete(todo.id)}>×</button></div>
  </article>;
}
export default TodoItem;
