import { useEffect, useState } from 'react';

function TodoForm({ onSubmit, editingTodo, onCancel }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setTitle(editingTodo?.title || '');
    setDueDate(editingTodo?.dueDate || '');
    setError('');
  }, [editingTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) { setError('Give your task a name first.'); return; }
    onSubmit({ title: title.trim(), dueDate });
    setTitle(''); setDueDate(''); setError('');
  };

  return <form className="todo-form" onSubmit={handleSubmit}>
    <div className="field wide"><label htmlFor="task-title">Task</label><input id="task-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What needs your attention?" /></div>
    <div className="field"><label htmlFor="due-date">Due date <span>(optional)</span></label><input id="due-date" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} /></div>
    <button className="primary-button" type="submit">{editingTodo ? 'Save changes' : 'Add task'} <span aria-hidden="true">{editingTodo ? '✓' : '→'}</span></button>
    {editingTodo && <button className="ghost-button cancel-button" type="button" onClick={onCancel}>Cancel</button>}
    {error && <p className="form-error" role="alert">{error}</p>}
  </form>;
}
export default TodoForm;
