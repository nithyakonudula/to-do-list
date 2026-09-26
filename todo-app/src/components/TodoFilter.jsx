function TodoFilter({ activeFilter, onChange, counts }) {
  const filters = [{ id: 'all', label: 'All', count: counts.all }, { id: 'pending', label: 'Pending', count: counts.pending }, { id: 'completed', label: 'Completed', count: counts.completed }];
  return <div className="filters" role="tablist" aria-label="Filter tasks">{filters.map((filter) => <button key={filter.id} className={activeFilter === filter.id ? 'active' : ''} role="tab" aria-selected={activeFilter === filter.id} onClick={() => onChange(filter.id)}>{filter.label}<span>{filter.count}</span></button>)}</div>;
}
export default TodoFilter;
