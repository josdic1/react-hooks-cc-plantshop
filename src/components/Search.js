function Search({ onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        id="search"
        placeholder="Type a name to search..."
        type="text"
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  );
}

export default Search;
