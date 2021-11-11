import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {

  const showListingsCards = listings.map(item => <ListingCard key={item.description} handleDelete = {handleDelete} item = {item}/>)

  return (
    <main>
      <ul className="cards">
        {showListingsCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
