import NoteCard from './NoteCard';
function NoteList({ notes, onEdit, onDelete, hasSearch }) { if (!notes.length) return <div className="empty-state"><div className="empty-icon">✎</div><h2>{hasSearch ? 'Nothing matched your search' : 'Your notebook is waiting'}</h2><p>{hasSearch ? 'Try a different word or browse all notes.' : 'Create your first note to make the page yours.'}</p></div>; return <div className="notes-grid">{notes.map((note) => <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />)}</div>; }
export default NoteList;
