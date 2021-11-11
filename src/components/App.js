import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";

function App() {
  const [allListings, setAllListings] = useState([])
  const [showListings, setShowListings] = useState([])
  const [searchText, setSearchText] = useState('')
  const [resetButton, setResetButton] = useState(false)
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    location: ''
  })
  const [formVisible, setFormVisible] = useState(false)
  const [formButton, setFormButton] = useState('Add New Listing')


  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data =>{
      setAllListings(data)
      setShowListings(data)
    })
  }, [])

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
    const deletedArray = allListings.filter(item => item.id !== id)
    setShowListings(deletedArray)
    setAllListings(deletedArray)
  })
  }

  function handleSearch(e){
    setSearchText(e.target.value)
  }

  function handleSearchSubmit(e){
    e.preventDefault()
    const searchArray = allListings.filter(item => item.description.toLowerCase().includes(searchText.toLowerCase()))
    setShowListings(searchArray)
    setSearchText('')
    setResetButton(!resetButton)
  }

  function handleReset(){
    setResetButton(!resetButton)
    setShowListings(allListings)
  }

  function compareSort(a, b){
    if (a.location < b.location){
      return -1
    } else if (a.location > b.location) {
      return 1
    } else {
      return 0
    }
  }

  
  function handleSort(e){
    const sortName = e.target.value
    if(sortName === 'Default'){
      let tempOne = allListings
      setShowListings(tempOne)
    } else if (sortName === 'Location'){
      let tempTwo = [...allListings].sort(compareSort)
      setShowListings(tempTwo)
    }
  }

  function handleFormChange(e){
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }
  
  function handleAddSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      const newArray = [data, ...allListings]
      setAllListings(newArray)
      setShowListings(newArray)
    })
    setFormData({
    description: '',
    image: '',
    location: ''
    })
    handleFormShow()
  }

  function handleFormShow(){
    setFormVisible(!formVisible)
    formVisible ? setFormButton('Add New Listing') : setFormButton('Nevermind')
  }

  return (
    <div className="app">
      <Header searchText={searchText} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} resetButton={resetButton} handleReset={handleReset} allListings={allListings} handleSort={handleSort} formData={formData} handleFormChange={handleFormChange} handleAddSubmit={handleAddSubmit} formVisible={formVisible} formButton={formButton} handleFormShow={handleFormShow}/>
      <ListingsContainer listings={showListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
