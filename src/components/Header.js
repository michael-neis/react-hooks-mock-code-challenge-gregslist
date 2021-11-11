import React from "react";
import Search from "./Search";
import Form from "./Form";

function Header({ handleSearchSubmit, handleSearch, searchText, resetButton, handleReset, handleSort, handleFormChange, formData, handleAddSubmit, formVisible, formButton, handleFormShow}) {

  return (
    <div style={{textAlign: 'center'}}>
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1> 
      <h3 style={{margin: '10px'}}>Sort:</h3>   
      <form>
        <select placeholder='Filter...' onChange={handleSort}>
          <option>Default</option>
          <option>Location</option>
        </select>
    </form>
      <Search handleSearchSubmit={handleSearchSubmit} searchText={searchText} handleSearch={handleSearch} resetButton={resetButton} handleReset ={handleReset}/>
    </header>
    <br/>
    <button onClick={handleFormShow}>{formButton}</button>
    {formVisible ? <Form handleFormChange={handleFormChange} formData={formData} handleAddSubmit={handleAddSubmit}/> : null}
    </div>
  );
}

export default Header;
