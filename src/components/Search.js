import React from "react";

function Search({ handleSearch, searchText, handleSearchSubmit, resetButton, handleReset }) {

  return (
    <>
    <form className="searchbar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
    {resetButton ? <button onClick={handleReset}>Run it back</button> : null}
    </>
  );
}

export default Search;
