import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const STORAGE_KEY = 'minor-project-04-todos';
const THEME_KEY = 'minor-project-04-todo-theme';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light');
  const [filter, setFilter] = useState('all');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); }, [todos]);
  useEffect(() => { localStorage.setItem(THEME_KEY, theme); document.documentElement.dataset.todoTheme = theme; }, [theme]);

  const handleSubmit = (todoData) => {
    if (editingTodo) { setTodos((current) => current.map((todo) => todo.id === editingTodo.id ? { ...todo, ...todoData } : todo)); setEditingTodo(null); return; }
    setTodos((current) => [{ ...todoData, id: crypto.randomUUID(), completed: false }, ...current]);
  };
  const handleDelete = (id) => { setTodos((current) => current.filter((todo) => todo.id !== id)); if (editingTodo?.id === id) setEditingTodo(null); };
  const handleToggle = (id) => setTodos((current) => current.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  const filteredTodos = todos.filter((todo) => filter === 'all' || (filter === 'completed' ? todo.completed : !todo.completed));
  const counts = { all: todos.length, pending: todos.filter((todo) => !todo.completed).length, completed: todos.filter((todo) => todo.completed).length };

  return <div className="app-shell"><header className="topbar"><a className="brand" href="."><span className="brand-mark">✓</span><span>task<span>flow</span></span></a><button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle light and dark mode">{theme === 'light' ? '☾ Dark mode' : '☀ Light mode'}</button></header>
    <main className="main-content"><section className="intro"><p className="eyebrow">WEEK 04 · PRODUCTIVITY</p><h1>Make space for<br /><em>what matters.</em></h1><p className="intro-copy">A calm place to capture tasks, set your pace, and make progress visible.</p></section>
      <section className="workspace"><div className="section-heading"><div><p className="eyebrow">YOUR WORKLIST</p><h2>{counts.pending ? `${counts.pending} ${counts.pending === 1 ? 'thing' : 'things'} in motion` : 'You are all caught up'}</h2></div><TodoFilter activeFilter={filter} onChange={setFilter} counts={counts} /></div><TodoForm onSubmit={handleSubmit} editingTodo={editingTodo} onCancel={() => setEditingTodo(null)} /><TodoList todos={filteredTodos} onToggle={handleToggle} onEdit={setEditingTodo} onDelete={handleDelete} /></section>
    </main><footer><span>React fundamentals, thoughtfully applied.</span><span>Local-first · Built for focus</span></footer></div>;
}
export default App;
