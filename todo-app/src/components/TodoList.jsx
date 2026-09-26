import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (!todos.length) return <div className="empty-state"><div className="empty-icon">✦</div><h2>No tasks in this view</h2><p>Add your first task to get your momentum going.</p></div>;
  return <div className="todo-list">{todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />)}</div>;
}
export default TodoList;
