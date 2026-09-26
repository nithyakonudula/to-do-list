function NoteCard({ note, onEdit, onDelete }) {
  const date = new Date(note.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  return <article className="note-card"><div className="card-top"><span className="category">{note.category}</span><div className="card-actions"><button className="icon-button" title="Edit note" aria-label={`Edit ${note.title}`} onClick={() => onEdit(note)}>✎</button><button className="icon-button danger" title="Delete note" aria-label={`Delete ${note.title}`} onClick={() => onDelete(note.id)}>×</button></div></div><h3>{note.title}</h3><p className="note-content">{note.content}</p><footer className="note-meta"><span>{note.updatedAt !== note.createdAt ? 'Updated' : 'Created'} {date}</span><span>↗</span></footer></article>;
}
export default NoteCard;
