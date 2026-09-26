function SearchBar({ searchTerm, onSearch }) { return <div className="search-wrap"><span aria-hidden="true">⌕</span><label className="sr-only" htmlFor="search-notes">Search notes</label><input id="search-notes" value={searchTerm} onChange={(event) => onSearch(event.target.value)} placeholder="Search your notes..." /><kbd>⌘ K</kbd></div>; }
export default SearchBar;
